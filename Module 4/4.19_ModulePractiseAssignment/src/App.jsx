import React from "react";
import useTextSizePreference from "./useTextSizePreference";

function App() {
  const [textSize, toggleTextSize] = useTextSizePreference();

  return (
    <div>
      <h1>Text Size Preference</h1>
      <p style={{ fontSize: textSize === "large" ? "24px" : "16px" }}>
        Current text size: {textSize === "large" ? "Large" : "Small"}
      </p>
      <button onClick={toggleTextSize}>Toggle Text Size</button>
    </div>
  );
}

export default App;
