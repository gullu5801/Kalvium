import React, { useState, useEffect, useRef } from "react";

const ChatApp = () => {
  // TODO: Initialize state for 'messages' (array) and 'input' (string)

  //declare variables
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Hint: You may need a ref (useRef) or state (useState) to store the WebSocket instance 
  // so it can be accessed globally inside the sendMessage function.


  //initialize Ref
  const socketRef = useRef(null);


  useEffect(() => {
    // TODO: Establish a WebSocket connection to "wss://echo.websocket.org"
    

    //Establish WebShocket
    const socket = new WebSocket("wss://echo.websocket.org");
    socketRef.current = socket;


    // TODO: Handle incoming messages (onmessage) and update the messages state
    // Hint: Use the functional state update e.g., setMessages(prev => [...prev, newMsg])
    

    //handle massage
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    // TODO: Handle WebSocket closure on component unmount (cleanup function)

    //add return socket
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    // TODO: Send message through WebSocket using .send() if input is not empty

    // to send message through socket
    if (input.trim() !== "" && socketRef.current) {
      socketRef.current.send(input);
    }
    
    // TODO: Clear the input field after sending

    //creating the input
    setInput("");
  };

  return (
    <div>
      {/* TODO: Add an <h2> element with the exact text "Real-Time Chat" */}

      {/* Declare header */}
      <h2>Real-Time Chat</h2>
      
      <div className="chat-box" data-testid="chat-box">
        {/* TODO: Map over the 'messages' state and display each message dynamically inside a <div> */}


        {/* display each message */}
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}


      </div>
      
      {/* TODO: Add an <input> element with data-testid="chat-input" */}
      {/* TODO: Bind the input value to your state and update it on change */}

      {/* crate a input */}
      <input
        data-testid="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      {/* TODO: Add a <button> element with data-testid="send-button" and text "Send" */}
      {/* TODO: Attach the sendMessage function to the button's onClick event */}

      {/* create button */}
      <button data-testid="send-button" onClick={sendMessage}>
        Send
      </button>
      
    </div>
  );
};

export default ChatApp;