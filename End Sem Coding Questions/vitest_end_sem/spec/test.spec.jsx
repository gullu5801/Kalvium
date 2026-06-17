import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {


  it('should have input type as password initially', () => {
    render(<App />);
    const input = screen.getByTestId('password-input');
    expect(input.type).toBe('password');
  });

  it('should render toggle button with text "Show"', () => {
    render(<App />);
    const button = screen.getByText(/Show/i);
    expect(button.tagName).toBe('BUTTON');
  });

  it('should change input type to text when button is clicked', () => {
    render(<App />);
    const button = screen.getByText(/Show/i);
    const input = screen.getByTestId('password-input');

    fireEvent.click(button);
    expect(input.type).toBe('text');
  });

  it('should change button text to "Hide" after click', () => {
    render(<App />);
    const button = screen.getByText(/Show/i);

    fireEvent.click(button);
    expect(screen.getByText(/Hide/i)).toBeDefined();
  });

  it('should toggle back to password type on second click', () => {
    render(<App />);
    const button = screen.getByText(/Show/i);
    const input = screen.getByTestId('password-input');

    fireEvent.click(button);
    fireEvent.click(screen.getByText(/Hide/i));

    expect(input.type).toBe('password');
  });

  it('should toggle button text back to "Show" on second click', () => {
    render(<App />);
    const button = screen.getByText(/Show/i);

    fireEvent.click(button);
    fireEvent.click(screen.getByText(/Hide/i));

    expect(screen.getByText(/Show/i)).toBeDefined();
  });

  it('should not clear input value when toggling visibility', () => {
    render(<App />);
    const input = screen.getByTestId('password-input');
    const button = screen.getByText(/Show/i);

    fireEvent.change(input, { target: { value: 'mypassword' } });
    fireEvent.click(button);

    expect(input.value).toBe('mypassword');
  });

  it('should handle multiple toggles correctly', () => {
    render(<App />);
    const input = screen.getByTestId('password-input');

    fireEvent.click(screen.getByText(/Show/i)); // text
    fireEvent.click(screen.getByText(/Hide/i)); // password
    fireEvent.click(screen.getByText(/Show/i)); // text

    expect(input.type).toBe('text');
    expect(screen.getByText(/Hide/i)).toBeDefined();
  });

  it('should keep input present in DOM after multiple toggles', () => {
    render(<App />);
    const input = screen.getByTestId('password-input');

    fireEvent.click(screen.getByText(/Show/i));
    fireEvent.click(screen.getByText(/Hide/i));

    expect(input).toBeDefined();
  });

});