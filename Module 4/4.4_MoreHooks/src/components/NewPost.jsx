import "./newPost.css";
import { ACTION_TYPE } from '../App';

export default function NewPost({ post, dispatch }) {
  return (
    <div className='new-post'>
      <div>
        {post.toggle 
          ? <h3>{post.name}</h3> 
          : <h3>The Content is hidden</h3>
        }
      </div>
      <button onClick={() => {
        //  Task 1:- Complete this and implement the dispatch call to toggle post visibility
        dispatch({
          type: ACTION_TYPE.TOGGLE,
          payload: { id: post.id }
        });
      }}>
        Toggle
      </button>
    </div>
  );
}