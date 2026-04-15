import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

/*
====================================================
BOOK LIST APP – STUDENT IMPLEMENTATION TASK
====================================================

INSTRUCTIONS:

You are building a simple Book List application.

Your tasks are:

1.  Fetch book data from an API using axios inside useEffect.
2️.  Store the fetched data in state.
3️.  Render:
      - Book title
      - Book thumbnail
      - Book description
      - Authors (each inside a <span> tag)
4️.  Handle API errors properly.

IMPORTANT:
- The API response structure is:
    response.data.books
- Each book object contains:
    id
    title
    description
    authors (array)
    imageLinks.smallThumbnail

====================================================
*/

function App() {

  // TODO 1: Create state to store books
  const [data, setData] = useState([]); //alredy done

  useEffect(() => {

    // TODO 2:
    // Make an axios GET request to:
    // https://example.com/api/books
    //
    // Then:
    // - Store response.data.books into state
    //
    // Also:
    // - Handle errors using .catch()
    // - Log status code if available
    // - If status is 404, log "Website not found"

    //add axios method 
    axios.get('https://example.com/api/books')
      .then((response) => {
        setData(response.data.books);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
          if (error.response.status === 404) {
            console.log("Website not found");
          }
        } else {
          console.log(error.message);
        }
      });

  }, []);

  return (
    <div>

      {/* 
      TODO 3:
      Loop through the data array using map().
      For each book, render:
        - Title inside <h4>
        - Thumbnail inside <img>
        - Description inside <p>
        - Authors inside separate <span> tags
      */}

      {/*
      Expected Structure:

      <div key={item.id}>
        <h4>Book Title</h4>

        <div className="flex">
          <img src="thumbnail-url" alt="Book Title" />
          <p>Book description</p>
        </div>

        <span>Author 1</span>
        <span>Author 2</span>

        <hr />
      </div>
      */}

      {/* add map methods and  changed image paragrah and autnor details */}
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <div className="flex">
            <img
              src={item.imageLinks?.smallThumbnail}
              alt={item.title}
            />
            <p>{item.description}</p>
          </div>

          {item.authors?.map((author, index) => (
            <span key={index}>{author}</span>
          ))}

          <hr />
        </div>
      ))} 


    </div>
  );
}

export default App;