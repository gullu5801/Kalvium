import { useState } from "react";


export default function LiveValidator(){
  const [password, setPassword] = useState("");

  // Decide strength based on length
  const getFeedback = () => {
    if (password.length < 5) {
      return { text: "Too short!", color: "red" };
    } else if (password.length < 10) {
      return { text: "Weak", color: "orange" };
    } else {
      return { text: "Strong", color: "green" };
    }
  };

  const feedback = getFeedback();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔐 Secure Signup</h2>

      {/* Controlled Input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      {/* Real-time message */}
      {password && (
        <p style={{ color: feedback.color }}>
          {feedback.text}
        </p>
      )}

      {/* Disabled button */}
      <button disabled={password.length < 10}>
        Sign Up
      </button>
    </div>
  );

}