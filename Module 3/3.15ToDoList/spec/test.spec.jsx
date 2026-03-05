import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('To-Do List App', () => {

  it('should add a new item to the to-do list', () => {
    render(<App />);
    
    // Simulate typing into the input field
    const inputElement = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    
    // Simulate clicking the "Add Item" button
    const addButton = screen.getByText(/add item/i);
    fireEvent.click(addButton);
    
    // Assert that the new item appears in the list
    expect(screen.getByDisplayValue('Buy groceries')).not.toBeNull();
  });

  it('should update an existing item in the to-do list', () => {
    render(<App />);
    
    // Add a new item first
    const inputElement = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    const addButton = screen.getByText(/add item/i);
    fireEvent.click(addButton);
    
    // Simulate updating the item
    const listItemInput = screen.getByDisplayValue('Buy groceries');
    fireEvent.change(listItemInput, { target: { value: 'Buy vegetables' } });
    
    // Assert that the item has been updated
    expect(screen.getByDisplayValue('Buy vegetables')).not.toBeNull();
  });

  it('should delete an item from the to-do list', () => {
    render(<App />);
    
    // Add a new item first
    const inputElement = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    const addButton = screen.getByText(/add item/i);
    fireEvent.click(addButton);
    
    // Simulate clicking the "Delete Item" button
    const deleteButton = screen.getByText(/delete item/i);
    fireEvent.click(deleteButton);
    
    // Assert that the item has been removed
    expect(screen.queryByDisplayValue('Buy groceries')).toBeNull();
  });

  
});
