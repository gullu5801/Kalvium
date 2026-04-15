import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
  cleanup,
} from '@testing-library/react';
import '@testing-library/dom';
import { beforeEach, vi } from 'vitest';

describe('Counter Component', () => {

  let Counter;

  beforeEach(async () => {
    vi.resetModules(); // 🔥 Reset module cache (VERY IMPORTANT)
    Counter = (await import('/src/Counter.jsx')).default;
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the counter with initial value of 0', async () => {
    render(<Counter />);
    const counterValue = await screen.findByText('0');
    expect(counterValue).toBeTruthy();
  });

  it('should increment the counter when "Like" button is clicked', async () => {
    render(<Counter />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    await waitFor(() => expect(screen.getByText('1')).toBeTruthy());
  });

  it('should decrement the counter when "Unlike" button is clicked', async () => {
    render(<Counter />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    await waitFor(() => expect(screen.getByText('1')).toBeTruthy());

    const unlikeButton = screen.getByText('Unlike');
    fireEvent.click(unlikeButton);
    await waitFor(() => expect(screen.getByText('0')).toBeTruthy());
  });

  it('should not decrement below 0 when "Unlike" button is clicked multiple times', async () => {
    render(<Counter />);
    const unlikeButton = screen.getByText('Unlike');
    fireEvent.click(unlikeButton);
    fireEvent.click(unlikeButton);
    await waitFor(() => expect(screen.getByText('0')).toBeTruthy());
  });
});
