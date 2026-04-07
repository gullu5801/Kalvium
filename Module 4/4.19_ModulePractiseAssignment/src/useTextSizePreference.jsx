import { useState, useEffect } from "react";

/**
 *  Custom Hook: useTextSizePreference
 *
 * Goal:
 * Manage a text size preference ("small" | "large")
 * and persist it using localStorage.
 *
 * Requirements:
 * 1. Load saved text size from localStorage on mount.
 * 2. Toggle between "small" and "large".
 * 3. Save updated value back to localStorage.
 */

function useTextSizePreference() {
  // Default text size should be "small"
  const [textSize, setTextSize] = useState("small");

  /**
   * ✅ TODO 1:
   * When the component mounts:
   * - Check if localStorage has a key called "textSize"
   * - If it exists, update the state with that value
   * - If it does NOT exist, keep default as "small"
   */
  useEffect(() => {
    // 👉 Your code here

      //add localstorage with condition
      const savedSize = localStorage.getItem("textSize");
      if (savedSize) {
        setTextSize(savedSize);
      }
    
  }, []);

  /**
   * ✅ TODO 2:
   * Implement toggleTextSize function.
   *
   * Requirements:
   * - If current textSize is "small", change it to "large"
   * - If current textSize is "large", change it to "small"
   *
   * ✅ TODO 3:
   * - After updating state, save the new value to localStorage
   *   using key "textSize"
   */
  const toggleTextSize = () => {
    // 👉 Your code here

    //add code for newsize and task 3
    const newSize = textSize === "small" ? "large" : "small";
    setTextSize(newSize);
    localStorage.setItem("textSize", newSize);

  };

  return [textSize, toggleTextSize];
}

export default useTextSizePreference;
