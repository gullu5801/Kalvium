# React Router Assignment: Multi-Page Navigation

## Learning Goals

In this assignment, you will:

1. Learn how to use `react-router-dom` to implement client-side routing in React.
2. Understand how to structure a React application with multiple pages.
3. Create a navigation system using the `Navbar` component to allow users to switch between different pages without reloading the app.

---

## Task

You are required to build a multi-page React application using `react-router-dom`. Your app will consist of the following pages:

- **Home**: The landing page.
- **Contacts**: A page displaying contact information.
- **About**: A page giving information about the app or organization.

---

## Instructions

1. **Create a Navbar Component**:

   - Inside the `Navbar.js` file, create a navigation menu that allows users to navigate between the **Home**, **Contacts**, and **About** pages.
   - Use `Link` or `NavLink` from `react-router-dom` to create the navigation links.
   - **Hint**: Use `<Link to="/path">` or `<NavLink to="/path">` for each menu item to enable client-side navigation.

2. **Create the Pages**:

   - In the `pages` folder, create the following components:
     - **Home.jsx**: Displays a simple heading or introductory message.
     - **Contacts.jsx**: Displays contact information (can be placeholder text).
     - **About.jsx**: Provides information about the app or organization.
   - **Example Provided**: The **Home** page is provided. Create the **Contacts** and **About** pages similarly.

3. **Set Up Routing in `App.js`**:

   - Inside the `App.js` file, use `Routes` and `Route` components from `react-router-dom` to define routes for each page:
     - `/` should load the **Home** component.
     - `/contacts` should load the **Contacts** component.
     - `/about` should load the **About** component.
   - Ensure the correct component is rendered when users navigate to each path.

4. **Organize Your Components**:

   - The `Navbar` component should be placed at the top of the app so it remains visible across all pages.
   - Below the `Navbar`, display the page content corresponding to the current route (either **Home**, **Contacts**, or **About**).

---

## Bonus Tasks (Optional)

1. **Active Navigation Styling**:

   - Use `NavLink` instead of `Link` in the `Navbar` component to highlight the active page in the navigation bar.
   - Apply custom styling to the active link to make it visually distinct.

2. **404 Page**:
   - Implement a 404 page that renders if the user navigates to a non-existent route (any route other than `/`, `/contacts`, or `/about`).
   - **Hint**: You can define a `<Route path="*">` to handle this.

---

## Outcome

By the end of this assignment, you will be able to:

- Use `react-router-dom` to set up routing between multiple pages.
- Create a navigation system that allows users to switch between pages without refreshing the browser.
- Organize a React app with multiple components and routes in a clean and structured way.
