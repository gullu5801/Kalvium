import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App Component - Text Size Preference", () => {
  beforeEach(() => {
    localStorage.clear();
  });

 
  

  it("should load text size from localStorage if it exists", () => {
    localStorage.setItem("textSize", "large");
    render(<App />);
    const textSizeElement = screen.getByText(/Current text size: Large/i);
    expect(textSizeElement).not.toBeNull();
  });

  it("should toggle text size on button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /Toggle Text Size/i });

    // Initial state check
    expect(screen.getByText(/Current text size: Small/i)).not.toBeNull();

    // Click to switch to Large
    fireEvent.click(button);
    expect(screen.getByText(/Current text size: Large/i)).not.toBeNull();

    // Click again to switch back to Small
    fireEvent.click(button);
    expect(screen.getByText(/Current text size: Small/i)).not.toBeNull();
  });

  it("should persist the text size change in localStorage", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /Toggle Text Size/i });

    // Toggle to Large
    fireEvent.click(button);
    expect(localStorage.getItem("textSize")).toBe("large");

    // Toggle back to Small
    fireEvent.click(button);
    expect(localStorage.getItem("textSize")).toBe("small");
  });
});
