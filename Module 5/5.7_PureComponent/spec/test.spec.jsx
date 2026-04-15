import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import SimpleCounterComponent from '../src/components/SimpleCounterComponent.jsx';
import PureCounterComponent from '../src/components/PureCounterComponent.jsx';

// CRITICAL VITEST FIX: Clean up the DOM after every test to prevent state bleeding
afterEach(() => {
  cleanup();
});

describe('SimpleCounterComponent', () => {
  it('Test Case 1: It should render the Simple Component with initial value 0 and toggle as false', () => {
    render(<SimpleCounterComponent />);

    const counterValue = screen.getByText("0");
    expect(counterValue).toBeTruthy();
    
    // Ensure the Set Toggle button exists
    const setToggleBtn = screen.getByText("Set Toggle");
    expect(setToggleBtn).toBeTruthy();
    
    // Ensure the Counter button exists
    const counterBtn = screen.getByText("Counter");
    expect(counterBtn).toBeTruthy();
  });

  it('Test Case 2: It should toggle and increment the counter when Set Toggle is clicked', () => {
    render(<SimpleCounterComponent />);

    const setToggleBtn = screen.getByText("Set Toggle");
    fireEvent.click(setToggleBtn);
    
    const counterBtn = screen.getByText("Counter");
    fireEvent.click(counterBtn);
    
    const counterValue = screen.getByText("1");
    expect(counterValue).toBeTruthy();
  });
});

describe('PureCounterComponent', () => {
  it('Test Case 3: It should render the Pure Component with initial value 0 and toggle as false', () => {
    render(<PureCounterComponent />);
    
    const counterValue = screen.getByText("0");
    expect(counterValue).toBeTruthy();
    
    const setToggleBtn = screen.getByText("Set Toggle");
    expect(setToggleBtn).toBeTruthy();
    
    const counterBtn = screen.getByText("Counter");
    expect(counterBtn).toBeTruthy(); 
  });

  it('Test Case 4: It should toggle and increment the counter when Set Toggle is clicked', () => {
    render(<PureCounterComponent />);
    
    const setToggleBtn = screen.getByText("Set Toggle");
    fireEvent.click(setToggleBtn);
    
    const counterBtn = screen.getByText("Counter");
    fireEvent.click(counterBtn);
    
    const counterValue = screen.getByText("1");
    expect(counterValue).toBeTruthy();
  });
});