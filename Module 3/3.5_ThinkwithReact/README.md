## Challenge: Your First React Component

Welcome to your first React experience! Let's get started with a simple challenge to familiarize you with how React components and styling work together.

### Objective
Create a basic React component that displays a welcome message and a short description with specific styling.

---

## Instructions

### 1.Edit the Component
- Open the **`App.jsx`** file (located in `src/`).
- **Create a Container:** Inside the `App` function, return a `<div>` element with a `className` of `"app-container"`.
- **Add Headings:** Within this `<div>`, create two headings:
    - An `<h1>` tag displaying the text: **"Hello Kalvium"**
    - An `<h2>` tag displaying the text: **"My first react experience"**

### 2.Style the Component
- Open the **`App.css`** file.
- Add styles to ensure the following requirements are met:
    - **Color:** Both headings (`h1` and `h2`) must be white. You **must** use the specific value: `rgb(255, 255, 255)`.
    - **Alignment:** Both headings must be **center-aligned**.

### 3.Optional
- Apply additional styles to the `.app-container` (like a background color) to make the white text visible and the content look nice.

---

## Running Your App & Tests

### To visualize your App in the Browser:
Run the following command to start the development server:
```bash
npm run dev