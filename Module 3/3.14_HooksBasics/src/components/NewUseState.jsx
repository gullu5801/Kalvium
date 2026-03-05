import React, { useState } from "react";

function NewUseState({ para }) {
  // Initialized to false so the initial test (expect content to be null) passes
  const [showContent, setShowContent] = useState(false);
  const [like, setLike] = useState(0);

  function handleState() {
    setShowContent(!showContent);
  }

  function handleLike() {
    setLike(prev => prev + 1);
  }

  return (
    <div>
      {/* Requirement: Only show <p> when visible */}
      {showContent && <p>{para}</p>}

      <button onClick={handleState}>Content</button>

      {/* Requirement: Display like count inside <h4> */}
      <h4>{like}</h4>

      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default NewUseState;