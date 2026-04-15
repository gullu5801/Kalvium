# Redux Thunk Assignment

## Objective:

In this assignment, you will implement a **Redux Thunk** to fetch user data from an API and display it in a React component. You will also handle errors and display an error message if the data fetch fails.

---

## Tasks Breakdown:

### Task 1: Implement the `fetchData` Thunk

- You need to write a thunk function called `fetchData`.
- The `fetchData` thunk should:
  1. Fetch user data from the API: `https://jsonplaceholder.typicode.com/users` using **Axios** or **fetch**.
  2. If the API call is **successful**:
     - Dispatch the `fetchUserData` action with the fetched user data as the payload.
  3. If the API call **fails**:
     - Dispatch the `showError` action with the error message as the payload.

### Task 2: Connect and Display Data in the `Counter` Component

1. **Task 2.1: Handle Errors**
   - If there is an error in fetching the data, display the error message in the component.
2. **Task 2.2: Display the List of Users**

   - Once the data is fetched, display the list of users.
   - Use the `.map()` function to iterate over the data and display each user's `name` and `email`.

3. **Task 2.3: Dispatch the Thunk**
   - Implement a button that, when clicked, dispatches the `fetchData` thunk to fetch the data.

---

Good luck and happy coding! 🎉
