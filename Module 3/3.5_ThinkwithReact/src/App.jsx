import React from 'react';
import './App.css'; 

function App() {
  // TODO: Create a style object named 'headingStyle'
  // It should have:
  // 1. color: 'rgb(255, 255, 255)'
  // 2. textAlign: 'center'\
  const headingStyle = {
    color: 'rgb(255, 255, 255)',
    textAlign: 'center'
  };
  

  return (
    // TODO: Add className="app-container" and style={{ backgroundColor: 'black' }} to the div below
    
      
      /* TODO: Add an <h1> with text "Hello Kalvium" and use style={headingStyle} */
      
      
      /* TODO: Add an <h2> wit text "My first react experience" and use style={headingStyle} */
      <div className="app-container" style={{ backgroundColor: 'black' }}>
      <h1 style={headingStyle}>Hello Kalvium</h1>
      <h2 style={headingStyle}>My first react experience</h2>
    </div>
  ); 
      
   
}

export default App;