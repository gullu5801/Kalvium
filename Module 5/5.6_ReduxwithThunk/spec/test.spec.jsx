import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import reducer from '../src/Reducers.jsx';
import Counter from '../src/Counter.jsx';

describe('Counter Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer,
      preloadedState: {
        users: [],
        error: '',
      },
    });
  });

  afterEach(() => {
    cleanup(); // Cleans up the DOM
    vi.restoreAllMocks(); // CRITICAL: Resets axios mocks between tests so they don't bleed!
  });

  it('should fetch and display user data on button click', async () => {
    const mockData = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    // VITEST FIX: Use vi.spyOn and mockResolvedValue instead of Jasmine's spyOn
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockData });

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.queryByText('John Doe')).toBeNull();
    expect(screen.queryByText('Jane Doe')).toBeNull();

    const button = screen.getByText('Fetch Data');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('john@example.com')).toBeTruthy();
      expect(screen.getByText('Jane Doe')).toBeTruthy();
      expect(screen.getByText('jane@example.com')).toBeTruthy();
    });

    expect(store.getState().users).toEqual(mockData);
  });

  it('should display error message on fetch failure', async () => {
    const mockError = 'Network Error';

    // VITEST FIX: Use vi.spyOn and mockRejectedValue instead of Jasmine's spyOn
    vi.spyOn(axios, 'get').mockRejectedValue(new Error(mockError));

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const button = screen.getByText('Fetch Data');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(mockError)).toBeTruthy();
    });

    expect(store.getState().error).toEqual(mockError);
  });
});