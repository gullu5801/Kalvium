import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import React from 'react'; // Ensure React is imported for JSX parsing

describe('State Management with useState Hook', () => {

  // Test for Counter functionality (5 marks)
  describe('Counter Functionality (5 marks)', () => {
    it('should display initial count as 0 (1 mark)', () => {
      render(<App />);
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    it('should increment the count when Increment button is clicked (2 marks)', () => {
      render(<App />);
      const incrementButton = screen.getByRole('button', { name: /increment/i });
      fireEvent.click(incrementButton);
      expect(screen.getByText('Counter: 1')).toBeInTheDocument();
      fireEvent.click(incrementButton);
      expect(screen.getByText('Counter: 2')).toBeInTheDocument();
    });

    it('should decrement the count when Decrement button is clicked (2 marks)', () => {
      render(<App />);
      const incrementButton = screen.getByRole('button', { name: /increment/i });
      const decrementButton = screen.getByRole('button', { name: /decrement/i });

      fireEvent.click(incrementButton); // Count is 1
      expect(screen.getByText('Counter: 1')).toBeInTheDocument();

      fireEvent.click(decrementButton); // Count is 0
      expect(screen.getByText('Counter: 0')).toBeInTheDocument();
      
      fireEvent.click(decrementButton); // Count is -1
      expect(screen.getByText('Counter: -1')).toBeInTheDocument();
    });
  });

  // Test for Input field functionality (5 marks)
  describe('Input Field Functionality (5 marks)', () => {
    

    it('should update the input value as user types (2 marks)', () => {
      render(<App />);
      const inputElement = screen.getByPlaceholderText('Type something...');
      fireEvent.change(inputElement, { target: { value: 'Hello' } });
      expect(inputElement).toHaveValue('Hello');
      expect(screen.getByText('You typed: Hello')).toBeInTheDocument();
    });

    it('should correctly reflect further input changes (2 marks)', () => {
      render(<App />);
      const inputElement = screen.getByPlaceholderText('Type something...');
      fireEvent.change(inputElement, { target: { value: 'React' } });
      expect(inputElement).toHaveValue('React');
      expect(screen.getByText('You typed: React')).toBeInTheDocument();

      fireEvent.change(inputElement, { target: { value: 'Hooks' } });
      expect(inputElement).toHaveValue('Hooks');
      expect(screen.getByText('You typed: Hooks')).toBeInTheDocument();
    });
  });
});