import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';


describe('Note Keeping App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the header with the correct title', () => {
    const headerElement = screen.getByText(/Kalvium Note Keeping App/i);
    expect(headerElement).toBeTruthy();  // Verifies that the header is rendered
  });

  it('should render the input textarea', () => {
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeTruthy();  // Verifies that the textarea is rendered
  });

  it('should render the output area with a heading', () => {
    const outputHeading = screen.getByText(/Pro Note/i);
    expect(outputHeading).toBeTruthy();  // Verifies that the output area heading is rendered
  });

  it('should update the output text in real-time as the user types', () => {
    const textareaElement = screen.getByRole('textbox');
    
    // Type into the textarea
    fireEvent.change(textareaElement, { target: { value: 'Hello, Kalvium!' } });

    // Check if the output text matches the typed text by querying within the output area
    const outputElement = screen.getByText('Hello, Kalvium!');
    expect(outputElement).toBeTruthy();
  });

});