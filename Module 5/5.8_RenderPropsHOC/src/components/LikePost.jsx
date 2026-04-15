import React, { useState } from 'react';
// TASK 2:
// Define a state to keep track of the like counter for the post.
// Create a function to increment the counter on button click.

export default function LikePost() {
  // Define a state to keep track of the like counter for the post.

  //add useSttate
  const [count, setCount] = useState(0);

  const handlePostCount = () => {
    // Increment the like counter here.

    //increment
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handlePostCount}>
        {/* add count */}
        Like Post {count} {/* Display the like counter here */}
      </button>
    </div>
  );
}
