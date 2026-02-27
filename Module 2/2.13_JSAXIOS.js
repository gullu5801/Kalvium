const axios = require('axios');
// Syntex
// npm install axios


// One time only
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

// axios.get(url, [config])
// axios.post(url, data, [config])
// axios.put(url, data, [config])
// axios.delete(url, [config]) 

// axios.get('/api/users')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Posts retrieved:', response.data);
    })
    .catch(error => {
        console.error('Failed to fetch posts:', error.message);
    });

async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Posts:', response.data);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

// axios.post('/api/users', {
//     firstName: 'John',
//     lastName: 'Doe'
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Learning Axios',
    body: 'Axios makes HTTP requests so much easier!',
    userId: 1
})
    .then(response => {
        console.log('Post created successfully:', response.data);
        console.log('Status code:', response.status); 
    })
    .catch(error => {
        console.error('Failed to create post:', error.message);
    });

async function createPost(postData) {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      postData,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000 // 5 second timeout
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Post creation failed: ${error.message}`);
  }
}

axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Just updating the title'
})
  .then(response => {
    console.log('Title updated:', response.data);
  })
  .catch(error => {
    console.error('Patch failed:', error.message);
  });

async function deletePost(postId) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (response.status === 200) {
      console.log(`Post ${postId} deleted successfully`);
      return true;
    }
  } catch (error) {
    console.error('Could not delete post:', error.message);
    return false;
  }
}