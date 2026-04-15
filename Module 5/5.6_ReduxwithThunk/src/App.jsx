import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import Counter from './Counter';

const store = configureStore({
  reducer,
});

export function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
