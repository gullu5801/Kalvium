/*  Button Click
         ↓
  Create AJAX Object
         ↓
Send Request to Server
         ↓
   Server Sends Data
         ↓
Update Page (No Refresh)  */
 

 // Step 1: Create AJAX object
const xhr = new XMLHttpRequest();

function loadData() {

  // Step 2: Open connection (GET request)
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  // Step 3: What to do when data is received
  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      document.getElementById("result").innerHTML = data.title;
    }
  };

  // Step 4: Send request
  xhr.send();
}

//Normal way
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};

//Axios way
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

//Shorter format
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res.data));