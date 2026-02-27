
  const title = document.getElementById('title');
  const button = document.getElementById('btn');

  button.addEventListener('click', () => {
    title.textContent = "Welcome to the API World!";
    document.body.style.backgroundColor = "#f0f0f0";
  });


//Simplest GET Requerst
async function getStudentData(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    const data = await response.json();
    
    console.log("User Name:", data.name);
    console.log("Email:", data.email);
  } catch (error) {
    console.error("User Not found!", error);
  }
}

// fetch('url')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Variable Declaration = await fetch(url, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json', // Tells server: "I am sending/expecting JSON"
//     'Authorization': 'Bearer my-token',  // Tells server: "Here is my ID card"
//     'Accept': 'application/json'         // Tells server: "Please give me JSON back"
//   }
// });


// Header,Role,Example
// Content-Type: What kind of data is in the body,application/json
// Authorization: Who is making this request,Bearer abc123xyz
// User-Agent: What browser/device is the user using,Mozilla/5.0...
// Accept: What format does the client want back,application/json

async function createNewUser() {
  const newUser = {
    name: "Gulshan Patel",
    email: "gulshanp@xyz.com",
    username: "gp_kalvium"
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();
  console.log("Success! Created user with ID:", data.id);
}

async function updateEmail(id, newEmail) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      email: newEmail
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await response.json();
  console.log("Updated User Data:", data);
}

async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });

    // For DELETE, the server usually returns a 200 (OK) or 204 (No Content) status
    if (response.ok) {
      console.log(`Successfully deleted user with ID: ${id}`);
      alert(`User ${id} has been removed from the list!`);
    } else {
      console.log("Delete failed. Status:", response.status);
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
}

