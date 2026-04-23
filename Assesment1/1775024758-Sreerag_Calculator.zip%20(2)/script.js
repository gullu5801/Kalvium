const display = document.getElementById("display");

// Store current input
let currentInput = "";

// Update display
const updateDisplay = (value) => {
  display.innerText = value || "0";
};

// Add value to display
const appendValue = (value) => {
  currentInput += value;
  updateDisplay(currentInput);
};

// Clear display
const clearDisplay = () => {
  currentInput = "";
  updateDisplay("0");
};

// Delete last character
const deleteLast = () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
};

// Calculate result
const calculateResult = () => {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch (error) {
    updateDisplay("Error");
    currentInput = "";
  }
};

// Handle button clicks
const handleButtonClick = (value) => {
  if (value === "C") {
    clearDisplay();
  } else if (value === "⌫") {
    deleteLast();
  } else if (value === "=") {
    calculateResult();
  } else {
    appendValue(value);
  }
};

// Select all buttons
const buttons = document.querySelectorAll(".btn");

// Add event listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleButtonClick(btn.innerText);
  });
});

// Initialize display
updateDisplay("0");