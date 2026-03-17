import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import useLocalStorage from '../src/useStorage.jsx';

// Test component to use the custom hook
function TestComponent({ storageKey, initialValue }) {
  const [storedValue, setStoredValue] = useLocalStorage(storageKey, initialValue);

  return (
    <div>
      <span data-testid="stored-value">{storedValue}</span>
      <button
        data-testid="update-value"
        onClick={() => setStoredValue('newValue')}
      >
        Update Value
      </button>
    </div>
  );
}

describe('useLocalStorage custom hook', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  // ✅ Test 1 (existing)
  it('should return the initial value if both storages are empty', () => {
    const { getByTestId } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );
    const storedValue = getByTestId('stored-value');
    expect(storedValue.textContent).toEqual('initialValue');
  });

  // ✅ Test 2
  it('should store updated value in localStorage and sessionStorage', async () => {
    const { getByTestId } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );

    fireEvent.click(getByTestId('update-value'));

    await waitFor(() => {
      expect(localStorage.getItem('testKey')).toEqual(JSON.stringify('newValue'));
      expect(sessionStorage.getItem('testKey')).toEqual(JSON.stringify('newValue'));
    });
  });

  // ✅ Test 3
  it('should read value from localStorage if available', () => {
    localStorage.setItem('testKey', JSON.stringify('storedFromLocal'));

    const { getByTestId } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );

    expect(getByTestId('stored-value').textContent).toEqual('storedFromLocal');
  });

  // ✅ Test 4
  it('should read value from sessionStorage if localStorage is empty', () => {
    sessionStorage.setItem('testKey', JSON.stringify('storedFromSession'));

    const { getByTestId } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );

    expect(getByTestId('stored-value').textContent).toEqual('storedFromSession');
  });

  // ✅ Test 5
  it('should persist value across re-renders (simulate refresh)', () => {
    const { getByTestId, unmount } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );

    fireEvent.click(getByTestId('update-value'));
    unmount();

    const { getByTestId: getAfterRefresh } = render(
      <TestComponent storageKey="testKey" initialValue="initialValue" />
    );

    expect(getAfterRefresh('stored-value').textContent).toEqual('newValue');
  });
});
