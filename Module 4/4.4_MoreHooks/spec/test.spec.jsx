import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App Component', () => {
  it('should add a new post using useReducer', () => {
    render(<App />);

    // Find the input field
    const input = screen.getByRole('textbox');

    // Simulate entering a name
    fireEvent.change(input, { target: { value: 'Test Post' } });

    // Simulate form submission by pressing Enter or submitting
    fireEvent.submit(input.closest('form'));

    // Check if the new post is added by searching for the text content
    const posts = screen.getAllByRole('heading');
    expect(posts[posts.length - 1].textContent).toEqual('Test Post');
  });
  it('should focus the input field using useRef', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const button = screen.getByText('Get back writing');

    // Click the focus button
    fireEvent.click(button);

    // Check if the input field is focused
    expect(document.activeElement).toEqual(input);
  });
});
