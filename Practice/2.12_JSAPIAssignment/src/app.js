// --------------------------------------------------
// GitHub User Fetching Assignment
// --------------------------------------------------
//
// WHAT IS PROVIDED:
// - HTML input, button, and UI container
// - CSS styling
// - Automated Jasmine tests
//
// WHAT YOU NEED TO DO:
// - Complete the TODOs below
// - Use fetch() to get GitHub user data
// - Update the UI correctly so all tests pass
//
// IMPORTANT:
// - Do NOT add extra HTML tags around labels
// - Text like "Followers: 10" must match EXACTLY
// --------------------------------------------------

// --------------------------------------------------
// Function to fetch user data from GitHub API
// --------------------------------------------------
async function fetchGitHubUser(username) {
  try {
    // TODO 1:
    // Use fetch() to request user data from GitHub
    // API format:
    // https://api.github.com/users/${username}
    //
    // Store the response in a variable named `response`
    // and use `await`

    // const response = await fetch(...);
    const response = await fetch(`https://api.github.com/users/${username}`);


    // TODO 2:
    // Handle the case when the user does not exist
    // If response.status is 404:
    // - Update the UI with:
    //   "User not found!" (text color should be red)
    // - Return from the function

    // if (response.status === 404) {
    //   document.getElementById("userInfo").innerHTML = ...
    //   return;
    // }
    if (response.status === 404) {
      document.getElementById("userInfo").innerHTML =
        `<p style="color: red;">User not found!</p>`;
      return;
    }

    // TODO 3:
    // Convert the response to JSON
    // Store the result in a variable named `userData`

    // const userData = await response.json();
    const userData = await response.json();


    // TODO 4:
    // Update the UI dynamically using userData
    //
    // Display the following:
    // - Profile image (avatar_url)
    // - Name (use "No Name Available" if null)
    // - Bio (use "No Bio Available" if null)
    // - Followers count (EXACT text: Followers: <number>)
    // - Public repositories count
    //   (EXACT text: Public Repositories: <number>)
    //
    // IMPORTANT:
    // Do NOT wrap "Followers:" or "Public Repositories:"
    // inside <strong>, <span>, or any other tag

    // document.getElementById("userInfo").innerHTML = `
    //   ...
    // `;

    const name = userData.name || "No Name Available";
    const bio = userData.bio || "No Bio Available";
    const followers = userData.followers;
    const publicRepos = userData.public_repos;
    const avatar = userData.avatar_url;

    document.getElementById("userInfo").innerHTML = `
      <img src="${avatar}" alt="Profile Picture">
      <p>${name}</p>
      <p>${bio}</p>
      <p>Followers: ${followers}</p>
      <p>Public Repositories: ${publicRepos}</p>
    `;

  } catch (error) {
    // TODO 5:
    // Handle unexpected errors
    // - Log the error to the console
    // - Update the UI with:
    //   "Something went wrong. Please try again."
    //   (text color should be red)

    console.error("Error fetching GitHub user:", error);
  }
}

// --------------------------------------------------
// Event listener for Search button (DO NOT MODIFY)
// --------------------------------------------------
document.getElementById("searchBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();

  // Validate empty input
  if (username === "") {
    document.getElementById("userInfo").innerHTML =
      `<p style="color: red;">Please enter a username.</p>`;
    return;
  }

  // Fetch GitHub user data
  fetchGitHubUser(username);
});