// Global users array (DO NOT MODIFY)
const users = [];

// Sample users to be added later (DO NOT MODIFY)
const newUsers = [
  {
    name: 'New User 1',
    email: 'newuser1@example.com',
    phone: '123-456-7890',
    website: 'newuser1.com',
    company: { name: 'New Company 1' },
    address: { city: 'New City 1', zipcode: '12345' },
  },
  {
    name: 'New User 2',
    email: 'newuser2@example.com',
    phone: '234-567-8901',
    website: 'newuser2.com',
    company: { name: 'New Company 2' },
    address: { city: 'New City 2', zipcode: '23456' },
  },
  {
    name: 'New User 3',
    email: 'newuser3@example.com',
    phone: '345-678-9012',
    website: 'newuser3.com',
    company: { name: 'New Company 3' },
    address: { city: 'New City 3', zipcode: '34567' },
  },
];

let newUserIndex = 0;

/* ======================================================
   Progression 1: Fetch Users using Fetch API
   ====================================================== */

/*
TODO:
1. Use fetch() to get users from:
   https://jsonplaceholder.typicode.com/users
2. Convert response to JSON
3. Push fetched users into the `users` array
4. Log the number of users fetched
5. Return a promise that resolves to users
6. Handle errors using .catch()
*/
function fetchUsers() {
  // TODO: Implement this function
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      users.push(...data);
      console.log("Fetched users:", data.length);
      return users;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}

/* ======================================================
   Progression 2: Display Users on UI
   ====================================================== */

/*
TODO:
1. Get the element with id="message"
2. Loop through the users array
3. Display the following details for each user:
   - Name
   - Email
   - Phone
   - City
   - Zipcode
   - Company name
4. Display total number of users at the end
*/
function displayUsers() {
  // TODO: Implement this function
  const messageDiv = document.getElementById('message');
  if (!messageDiv) return;

  let html = "";

  users.forEach((user) => {
    html += `
      <p>
        Name : ${user.name}<br>
        Email : ${user.email}<br>
        Phone : ${user.phone}<br>
        City : ${user.address.city}<br>
        Zipcode : ${user.address.zipcode}<br>
        Company : ${user.company.name}
      </p>
    `;
  });

  html += `<h3>Total Users: ${users.length}</h3>`;
  messageDiv.innerHTML = html;
}


/* ======================================================
   Progression 3: Create User using Promise
   ====================================================== */

/*
TODO:
1. Return a new Promise
2. Check if a user with the same email already exists
3. If exists → reject with an error message
4. Else → push user into users array and resolve
*/
function originalCreateUser(user) {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    const exists = users.some(u => u.email === user.email);

    if (exists) {
      reject("User with this email already exists");
    } else {
      users.push(user);
      resolve(user);
    }
  });
}

// DO NOT MODIFY (used by tests)
let createUser = originalCreateUser;

/* ======================================================
   Progression 4: Initialize App
   ====================================================== */

/*
TODO:
1. Show "Loading..." message initially
2. Call fetchUsers()
3. Display users after fetching
4. Clear loading message
5. Handle errors using try/catch
*/
async function init() {
  // TODO: Implement this function
}

/* ======================================================
   Progression 5: Fetch and Add New User
   ====================================================== */

/*
TODO:
1. Check if users.length is less than 10
2. If yes → call createUser() with next user
3. Increment newUserIndex
4. Refresh UI using displayUsers()
5. If users >= 10 → log error to console
*/
function getData() {
  // TODO: Implement this function
}

/* ======================================================
   Display Error Handling
   ====================================================== */

/*
TODO:
1. Remove existing error message if present
2. Create a new error div
3. Display the error message
*/
function displayError(error) {
  // TODO: Implement this function
}

/* ======================================================
   Advanced Challenge: Edit User
   ====================================================== */

/*
TODO:
1. Find user using email
2. If not found → log error
3. If found → update details
4. Refresh UI
*/
function editUser(email, updatedData) {
  // TODO: Implement this function
}
