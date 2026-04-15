import React, { useState } from 'react'
  // TASK 1: 
  // Define a state to keep track of the like counter for the image.
  // Create a function to increment the counter on button click.

export default function LikeImage() {

  // Define a state to keep track of the like counter for the image.

  //add useState
  const [count, setCount] = useState(0);

  const handleLikeImageCount = () => {
    // Increment the like counter here.

    //increment
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleLikeImageCount}>
      {/* add count */}
        Like Image {count} {/* Display the like counter here */}
      </button>
    </div>
  )
}
