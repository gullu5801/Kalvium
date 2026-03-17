

import { useEffect, useState } from 'react';

function saveValue(key, initialValue) {
  // TODO: Retrieve the value from localStorage and sessionStorage.
  // You need to fetch the value from either localStorage or sessionStorage.
  // If a value is stored, return it. Otherwise, return the initialValue.
  const local = localStorage.getItem(key);
  if (local !== null) {
    return JSON.parse(local);
  }

  const session = sessionStorage.getItem(key);
  if (session !== null) {
    return JSON.parse(session);
  }
 

  // If no value exists in localStorage or sessionStorage, return the initialValue.
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  // State initialization. Students should understand how to use useState with lazy initialization.

    // TODO: Initialize the content state by calling the saveValue function.
    const [content, setContent] = useState(() => saveValue(key, initialValue));
    // TODO: Whenever the content state or the key changes, save the updated content to both localStorage and sessionStorage.
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(content));
      sessionStorage.setItem(key, JSON.stringify(content));
    }, [key, content]);

  // Return the content state and the setContent function so it can be updated later.
  return [content, setContent];
}