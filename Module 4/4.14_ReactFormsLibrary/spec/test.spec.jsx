import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import App from '../src/App.jsx';

afterEach(cleanup);

describe('App Component Form', () => {
  it('should display error when first name is missing', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(screen.getByText(/First Name is required!/i)).toBeTruthy();
    });
  });

  it('should display error when password does not meet criteria', async () => {
    render(<App />);
    
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'abc' },
    }); 
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      const minLengthError = screen.getByText(
        /password must be more than 4 characters/i
      );
      expect(minLengthError).toBeTruthy();
    });
  });

  it('should successfully submit the form when all fields are valid', async () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'Password1' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      const successMessage = screen.getByTestId('success-message');
      expect(successMessage).toBeTruthy();
    });
  });
});
