

import { useReducer, useRef, useState } from 'react';
import './App.css';
import NewPost from './components/NewPost';

export const ACTION_TYPE = {
  ADD_POST:"add-post",
  TOGGLE: "toggle",
};

function App() {

  // Function to create a new post object
  function newPost(name) {
    return { id: Date.now(), name: name, toggle: true };
  }
  
  // Reducer function to manage posts
  function reducer(posts, action) {
    switch(action.type) {
      case ACTION_TYPE.ADD_POST:
        // Task 2 :-Complete this code to  implement this to handle adding a new post
        return [...posts, newPost(action.payload.name)];
      
      case ACTION_TYPE.TOGGLE:
        // Task 3 :- Complete the code to  implement this to handle toggling post visibility
        return posts.map(post => {
          if (post.id === action.payload.id) {
            return { ...post, toggle: !post.toggle };
          }
          return post;
        });
    
      default:
        return posts;
    }
  }

  // Task 4 :- Complete the code to  initialize the useReducer hook and initialise the useRef hook(inputRef)
  //add useRef and useReducer
  const [name, setName] = useState(" ");
  const inputRef = useRef(null);
  const [posts, dispatch] = useReducer(reducer, []);


  function handleSubmit(e) {
    e.preventDefault();
    //Task 5 :-Complete the code to  implement this to dispatch the action to add a post
    //add dispatch method
    dispatch({
      type: ACTION_TYPE.ADD_POST,
      payload: { name: name }
    });
    setName(" ");
  }

  function focus() {
// Task 6 :- Add focus to the input
//add reference
inputRef.current.focus();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>

      {
        // Task 7:- complete the code to map over posts and display them
        //add post method
        posts.map(post => {
          return <NewPost key={post.id} post={post} dispatch={dispatch} />
        })
      }

      <button onClick={focus}>Get back writing</button>
    </div>
  );
}

export default App;
