# Real-Time Chat Application (Part 1)

## Introduction to the Challenge

In this assignment, you will build the core functionality of a chat app. Unlike standard HTTP requests, **WebSockets** allow for a persistent, bi-directional connection between your browser and a server. 

We will use a public test server: `wss://echo.websocket.org`. This is an "echo" server—whatever message you send to it, it immediately sends right back to you, simulating another user replying.

## Instructions & Tasks

When you first open `src/App.jsx`, you will notice the logic and parts of the UI are missing. **All tests will fail initially.** You must complete the following steps to build the app and pass the tests.

### Step 1: Initialize State
You need to track two pieces of data using the `useState` hook:
1.  **`messages`**: An array that stores all the chat history.
2.  **`input`**: A string that stores what the user is currently typing.

### Step 2: Build the User Interface
Inside the `return` statement of your component, replace the TODO comments with actual JSX elements. **You must use these exact attributes for the tests to pass:**
1.  Add an `<h2>Real-Time Chat</h2>`.
2.  Add an input field: `<input data-testid="chat-input" />`. Bind this input to your state using the `value` and `onChange` attributes.
3.  Add a send button: `<button data-testid="send-button">Send</button>`.

### Step 3: Establish WebSocket Connection
Inside the `useEffect` hook, connect to the server when the component mounts.
1.  Create a connection: `const socket = new WebSocket("wss://echo.websocket.org");`
2.  **Listen for messages**: Set up the `socket.onmessage` event listener. When data is received, append it to your `messages` state. *(Hint: Use the functional form of setState like `setMessages(prev => [...prev, newMsg])`)*
3.  **Cleanup**: Return a cleanup function from the `useEffect` that calls `socket.close()` to prevent memory leaks.

### Step 4: Handle Sending Messages
Implement the `sendMessage` function and attach it to your button's `onClick` event:
1.  Check if the `input` state is not empty.
2.  Send the message using the WebSocket `.send()` method. *(Hint: You might need to use `useRef` or `useState` to store the socket instance created in `useEffect` so you can access it here).*
3.  Clear the input field by setting the state back to an empty string `""`.

### Step 5: Display Messages
Inside the provided `<div className="chat-box">`, use the `.map()` function on your `messages` array to render each message dynamically inside its own `<div>`.


## Test Cases 

The automated test suite will evaluate your code based on 5 test cases. 

1.  **Render UI**: Checks if the `<h2>`, input box (`data-testid="chat-input"`), and send button (`data-testid="send-button"`) are rendered correctly.
2.  **Input Binding**: Checks if typing in the input box successfully updates the component's state.
3.  **WebSocket Connection**: Verifies that a connection to `wss://echo.websocket.org` is established when the app loads.
4.  **Send Logic**: Verifies that clicking "Send" pushes the message payload to the socket and clears the input box.
5.  **Display Logic**: Verifies that when the socket receives a message from the server, it is successfully rendered inside the chat box on the screen.

## How to Check Your Work
*   **Preview**: Run `vite` in the terminal to view your application. If it works, sending a message should result in that same message appearing in the chat box a fraction of a second later.
*   **Test**: Run `npm run test:serve` in the terminal to execute the testing suite and verify your score.