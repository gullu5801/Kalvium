

##  Problem Statement

In this assignment, you will build a simple **Image Carousel** using **React functional components**.

An image carousel is a UI component that displays one image at a time and allows users to move between images using navigation buttons. You will create a carousel that shows an image along with its title and subtitle, and lets the user move **forward** and **backward** through the images using arrow buttons.

This assignment focuses on understanding **state management in functional components** using the `useState` hook.



##  Learning Goals

By completing this assignment, you will learn to:

* Create **functional components** in React
* Use the **`useState` hook** to manage state
* Handle **button click events**
* Display dynamic data from a JavaScript file
* Understand how UI behavior is verified using **test cases**



## 🛠️ Project Setup (IMPORTANT – Read First)

This project was created using:

```bash
npm create vite@latest
```

Some external libraries (such as Material UI icons) are also used in this project.

👉 **Before starting the assignment, you must install all required dependencies.**

### Step 1: Install dependencies

```bash
npm install
```

If you skip this step, you may face errors like:

* `module not found`
* blank screen
* failing test cases



##  Running the Project

* **Run test cases**

  ```bash
  npm run test:serve
  ```

* **Preview the application in the browser**

  ```bash
  npm run dev
  ```



## 📁 Files & Editing Rules

### ✅ File you are allowed to edit

* **`src/components/Carousel.jsx`**

### ❌ Files you should NOT edit

* `src/data/CarouselData.jsx`
* Test files
* Any other files in the project

> ⚠️ Editing files other than `Carousel.jsx` may cause test failures.



##  Tasks to Complete

You need to complete the following tasks inside **`Carousel.jsx`**:

1. **Create state**

   * Use the `useState` hook to store the index of the currently displayed image.
   * The carousel should start by showing the **first image**.

2. **Display carousel content**

   * Show the image using the data provided.
   * Display the image **title** and **subtitle** below the image.

3. **Add navigation functionality**

   * Clicking the **next arrow** should move to the next image.
   * Clicking the **previous arrow** should move to the previous image.

4. **Enable looping**

   * When the user is on the last image and clicks next, the carousel should go back to the first image.
   * When the user is on the first image and clicks previous, the carousel should go to the last image.

5. **Use functional components only**

   * Do not use class components.

Here is a gif, of how it should work like:
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/imagecarousal.gif)

##  Test Cases (How Your Code Will Be Checked)

Your solution will be evaluated using automated tests.
Your code should satisfy all of the following:

1. The carousel renders correctly using a **functional component**
2. The **first image** is shown when the component loads
3. Clicking the **next arrow** displays the next image
4. Clicking the **previous arrow** displays the previous image (with looping)
5. The **subtitle** of the current image is visible



## 📤 Submission Guidelines

* Complete all logic inside **`src/components/Carousel.jsx`**
* Make sure:

  * You ran `npm install`
  * All tests pass using `npm run test:serve`
  * The carousel works correctly when previewed using `npm run dev`
* Submit your solution only after **all tests pass**



##  Final Checklist

Before submitting, confirm that:

* [ ] You ran `npm install`
* [ ] You edited only `src/components/Carousel.jsx`
* [ ] You used `useState` for state management
* [ ] Carousel navigation works correctly
* [ ] All test cases pass



✨ **Happy Coding!**
This is your first step into building interactive UI components in React — take it slow and focus on understanding how state changes the UI 🚀






