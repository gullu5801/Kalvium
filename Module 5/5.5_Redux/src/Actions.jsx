const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function incrementNumber() {
  return {
    type: INCREMENT,
  };
}

export function decrementNumber() {
  return {
    type: DECREMENT,
  };
}
