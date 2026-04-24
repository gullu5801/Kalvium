import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ChatApp from '../src/App';

// Mock WebSocket implementation to control server behavior during testing without network calls
class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onclose = null;
    this.readyState = 1; // Simulate open connection
    MockWebSocket.instances.push(this);
  }

  send(data) {
    MockWebSocket.sentMessages.push(data);
    // Simulate echo server: instantly send the message back to the client
    if (this.onmessage) {
      this.onmessage({ data });
    }
  }

  close() {
    if (this.onclose) this.onclose();
  }
}

MockWebSocket.instances = [];
MockWebSocket.sentMessages = [];

  let originalWebSocket;

  beforeEach(() => {
    // Intercept native WebSocket with our Mock
    originalWebSocket = global.WebSocket;
    global.WebSocket = MockWebSocket;
    MockWebSocket.instances = [];
    MockWebSocket.sentMessages = [];
  });

  afterEach(() => {
    // Restore native WebSocket
    global.WebSocket = originalWebSocket;
    vi.clearAllMocks();
  });

  it('1. Should render the Chat Application UI correctly ', () => {
    render(<ChatApp />);
    expect(screen.getByText("Real-Time Chat")).toBeInTheDocument();
    expect(screen.getByTestId("chat-input")).toBeInTheDocument();
    expect(screen.getByTestId("send-button")).toBeInTheDocument();
  });

  it('2. Should update input value when user types ', () => {
    render(<ChatApp />);
    const input = screen.getByTestId("chat-input");
    
    fireEvent.change(input, { target: { value: "Hello React" } });
    expect(input.value).toBe("Hello React");
  });

  it('3. Should establish a WebSocket connection to the echo server on mount ', () => {
    render(<ChatApp />);
    
    expect(MockWebSocket.instances.length).toBeGreaterThan(0);
    expect(MockWebSocket.instances[0].url).toBe("wss://echo.websocket.org");
  });

  it('4. Should send message via WebSocket and clear input field on button click ', () => {
    render(<ChatApp />);
    const input = screen.getByTestId("chat-input");
    const button = screen.getByTestId("send-button");

    fireEvent.change(input, { target: { value: "Testing WebSocket" } });
    fireEvent.click(button);

    // Verify socket received the payload
    expect(MockWebSocket.sentMessages).toContain("Testing WebSocket");
    
    // Verify input was reset
    expect(input.value).toBe("");
  });

  it('5. Should receive incoming messages and display them dynamically', async () => {
    render(<ChatApp />);
    
    const instance = MockWebSocket.instances[0];
    
    // Fail gracefully if the socket wasn't established in Step 3
    if (!instance) {
      throw new Error("WebSocket connection not established. Complete the connection logic first.");
    }
    
    // Manually trigger an incoming message from the server
    act(() => {
        if(instance.onmessage) {
            instance.onmessage({ data: "Message from Server" });
        }
    });

    // Verify the message renders on the screen inside the chat box
    await waitFor(() => {
      expect(screen.getByText("Message from Server")).toBeInTheDocument();
    });
  });
