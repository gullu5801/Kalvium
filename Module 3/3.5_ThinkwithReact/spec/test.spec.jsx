import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {
  it('should display the text "Hello Kalvium" in an h1 tag', () => {
    render(<App />);
    const headingElement = screen.getByText(/Hello Kalvium/i);
    expect(headingElement.tagName).toBe('H1');
  });

  it('should display the text "My first react experience" in an h1 tag', () => {
    render(<App />);
    const headingElement = screen.getByText(/My first react experience/i);
    expect(headingElement.tagName).toBe('H2');
  });

  it('should have headings that are white in color and center aligned', () => {
    render(<App />);
    const headingElements = screen.getAllByRole('heading');

    headingElements.forEach((heading) => {
      const style = window.getComputedStyle(heading);
      expect(style.color).toBe('rgb(255, 255, 255)'); // White color
      expect(style.textAlign).toBe('center'); // Center aligned
    });
  });
});