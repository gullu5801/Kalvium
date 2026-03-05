import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import UseContext from '../src/components/UseContext.jsx';


describe('NewUseState Component', () => {
  beforeEach(() => {
    render(<UseContext />);
  });

  it('should render initial empty state and like count as 0', () => {
    // Check initial state is empty and like count is 0
    expect(screen.getByText('0')).toBeDefined(); // Use toBeDefined to ensure the element exists
    expect(screen.queryByText(/He hid under the covers/i)).toBeNull(); // Check that content is not rendered
  });

  it('should display content when the content button is clicked', () => {
    // Simulate click on the Content button
    const contentButton = screen.getByText('Content');
    fireEvent.click(contentButton);

    // Check if the content is displayed
    expect(screen.getByText(/He hid under the covers/i)).toBeDefined();
  });
  it('should display content when the content button is clicked 5 times consecutively', () => {
    // Simulate click on the Content button
    const contentButton = screen.getByText('Content');
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);

    // Check if the content is displayed
    expect(screen.getByText(/He hid under the covers/i)).toBeDefined();
  });

  it('should hide content when the content button is clicked again', () => {
    // Simulate two clicks on the Content button
    const contentButton = screen.getByText('Content');
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);

    // Check if the content is hidden
    expect(screen.queryByText(/He hid under the covers/i)).toBeNull(); // Check that content is not rendered
  });
  it('should hide content when the content button is clicked again for 6 times consecutively', () => {
    // Simulate two clicks on the Content button
    const contentButton = screen.getByText('Content');
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    fireEvent.click(contentButton);
    
    // Check if the content is hidden
    expect(screen.queryByText(/He hid under the covers/i)).toBeNull(); // Check that content is not rendered
  });

  it('should increase the like count when the like button is clicked', () => {
    // Simulate click on the Like button
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);

    // Check if the like count is incremented
    expect(screen.getByText('1')).toBeDefined(); // Use toBeDefined to ensure the element exists
  });


});