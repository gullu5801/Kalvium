

# 🧪 CRUD To-Do List Lab

## 📝 Overview

Welcome, Kalvian! In this lab, you'll build a simple **To-Do List App** to apply everything you've learned so far in React.

### 🎯 Objectives

- Practice performing **CRUD operations** (Create, Read, Update, Delete) using **React.js**.
- Learn to break your app into **components** and manage state using **class components**.
- Get hands-on with **props** and **state** handling.
- Experience using **both functional and class-based components** in one project.

This lab is a **mini project** that wraps up your React learning with a practical use case. Let’s go! 🚀

---

## 💡 Introduction

You’ll build a **To-Do List** app — a classic example for understanding how CRUD operations work.

> 📚 Need a refresher?  
> Review CRUD operations [here](https://www.freecodecamp.org/news/crud-operations-explained/).

Here’s how CRUD plays out in a To-Do app:

- ✅ **Create**: Add a new item like “Buy groceries”.
- 👀 **Read**: See all items each time you open the app.
- 🔄 **Update**: Edit items like fixing “Buy Windows” to “Buy Mac”.
- 🗑️ **Delete**: Remove tasks you've completed.

---

## ⚙️ Setup Instructions

- The app is preconfigured using **React + Vite**.
- Run the following command to launch test cases:
  
  ```bash
  npm run test:serve
  ```

- Styling is **not the focus**, but feel free to style the app or match the layout below.

> 💡 `DisplayListOfItems.jsx` is already implemented for you.

---

## 🔧 Steps to Follow

### 1️⃣ Create  
Let users **add new tasks**.

#### Key Generation Tip 🔑  
In your `handleSubmit` function, generate a **unique key** using:
```js
const newItem = {
  id: Date.now(), // Or use uuid if installed
  text: inputValue,
};
```

📸 Demo:  
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/t+do+list+1.gif)

---

### 2️⃣ Update  
Allow users to **edit tasks**.

You can **either**:
- Edit the task directly in the list, or  
- Add an **Edit button** that toggles input mode for that item.  
📝 Note: **The current test only checks direct editing**, but you can optionally try the button approach too.

📸 Demo:  
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/to+do+list+2.gif)

---

### 3️⃣ Delete  
Let users **delete tasks** when done.

📸 Demo:  
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/to+do+list+3.gif)

---
## 📚 Tech Notes

- This assignment includes both **class components** (for managing state) and **functional components** (for UI rendering).
- Feel free to explore how data is passed between them using **props**.

---

## ✅ What’s Done for You

- ✅ App setup with Vite + React
- ✅ Component `DisplayListOfItems.jsx`
- ✅ Basic folder structure
- ✅ Test runner setup with `npm run test:serve`

---

## 🚀 Bonus Challenge

Try styling your app or adding cool features like:
- Marking items as completed ✅
- Filtering completed vs. pending
- Persisting data using localStorage

