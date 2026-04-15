

#  Book List Application – Assignment

---

#  Problem Statement

You are building a **React Book List Application** that fetches book data from an API and displays it in the user interface.

Your goal is to:

* Fetch book data using **Axios**
* Store the data in React state
* Render the book details in a structured UI
* Ensure your implementation passes the provided test cases

The application should display:

* Book Title
* Book Thumbnail
* Book Description
* Book Authors

---

#  Tasks

You must complete **two main tasks** inside `App.jsx`.

---

## Task 1: Fetch Data Using Axios

### Objective

Fetch book data from the API and store it in the component state.

### Requirements

* Use `axios.get()` to fetch data from:

```
https://example.com/api/books
```

* Place the API call inside `useEffect`
* Store the result in state using `setData`
* The API response structure is:

```js
response.data.books
```

* Implement proper error handling using `.catch()`
* Do NOT remove the provided error handling logic

---

##  Task 2: Render the Books in the UI

### Objective

Display the fetched book information properly.

For each book, render:

* Title inside `<h4>`
* Thumbnail inside `<img>`
* Description inside `<p>`
* Authors inside `<span>` elements

### Important Notes

* Use `.map()` to loop through books
* Use a unique `key` prop
* Use optional chaining to prevent crashes:

```js
item.imageLinks?.smallThumbnail
```

* Authors must be rendered inside `<span>` tags

---

#  Instructions

1. Open the file:

```
src/App.jsx
```

2. Implement:

   * Axios GET request
   * State update using `setData`
   * UI rendering logic

3. Do NOT:

   * Modify test files
   * Change API structure
   * Remove error handling

4. Install dependencies if needed:

```bash
npm install axios
```

---

#  Testing

Your implementation will be automatically tested.

---

##  Run the Test Cases

Use the following command:

```bash
npm run test:serve
```

---

##  What the Tests Will Check

The test cases will verify that:

1. ✔ Data is fetched using axios
2. ✔ Book titles are rendered
3. ✔ Book descriptions are displayed
4. ✔ Book thumbnails are rendered
5. ✔ Authors are rendered inside `<span>` elements
6. ✔ No runtime rendering errors occur

If your implementation is correct, all tests will pass.

---

#  Submission Guidelines

* You must edit only:

```
src/App.jsx
```

* Do NOT modify:

  * Test files
  * Configuration files
  * Package files

* Ensure:

  * No console errors
  * All test cases pass
  * Code is clean and readable

---


