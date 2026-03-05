import React from 'react';
import './App.css'
   {/* 
        TODO: 
        1. Render an <h1> with text "Kalvium Gallery" 
        2. Create a div with class="row"
        3. Use props.data.map() to render the images 
        4. Each image should be wrapped in a div with class="column"
        5. The img tag must have:
           - src: the image url
           - alt: `Gallery image ${image.img}`  <-- IMPORTANT for test
      */}


      function App(props) {
        return (
          <div>
            <h1>Kalvium Gallery</h1>
      
            <div className="row">
              {props.data.map((image) => (
                <div className="column" key={image.id}>
                  <img
                    src={image.img}
                    alt={`Gallery image ${image.img}`}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }


      export default App;