import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom'; // more common with Vitest
import App from '../src/App.jsx';

describe('App Component', () => {

  it('should check if useCallback is implemented for testFunction', () => {
    const spy = vi.spyOn(React, 'useCallback');

    render(<App />);

    fireEvent.click(screen.getByText('Show List'));

    expect(spy).toHaveBeenCalled();
  });

  it('should check if useMemo is implemented for delayFunction', () => {
    const spy = vi.spyOn(React, 'useMemo');

    render(<App />);

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
  });

});
