import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom'; // For custom Jasmine matchers
import App from '../src/App.jsx';
describe('Counter App', () => {
  // Test if the initial counter value is 0
  it('should display initial counter value as 0', () => {
    render(<App />);
    const counterText = screen.getByText(/Counter: 0/i);
    expect(counterText.textContent).toBe("Counter: 0");
  });

  // Test if clicking the + button increments the counter
  it('should increment the counter when + is clicked', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const counterText = screen.getByText(/Counter: 1/i);
    expect(counterText.textContent).toBe("Counter: 1");
  });

  // Test if clicking the - button decrements the counter
  it('should decrement the counter when - is clicked', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);  // Counter becomes 1
    fireEvent.click(incrementButton);  // Counter becomes 2
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);  // Counter becomes 1
    const counterText = screen.getByText(/Counter: 1/i);
    expect(counterText.textContent).toBe("Counter: 1");
  });

  // Test if the counter updates correctly after multiple operations
  it('should update the counter correctly after multiple operations', () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    fireEvent.click(incrementButton); // Counter becomes 1
    fireEvent.click(incrementButton); // Counter becomes 2
    fireEvent.click(decrementButton); // Counter becomes 1
    fireEvent.click(decrementButton); // Counter becomes 0

    const counterText = screen.getByText(/Counter: 0/i);
    expect(counterText.textContent).toBe("Counter: 0");
  });
});