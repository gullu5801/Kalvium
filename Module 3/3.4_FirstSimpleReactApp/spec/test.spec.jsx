import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {
  it('should display the text "Welcome to React,Your Name!"', () => {
    render(<App />);
    const headingElement = screen.getByText(/Welcome to React, Your Name!/i);
    expect(headingElement).not.toBeNull();  // ✅ Checks if the element exists
    expect(headingElement.tagName).toBe('H1');
  });


});
