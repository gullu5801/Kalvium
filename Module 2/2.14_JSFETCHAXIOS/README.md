## Crypto Price Tracker - Assignment

## 📌 Overview
- In this assignment, you will implement JavaScript functionality to fetch cryptocurrency prices using two different methods:

- fetch() API
- Axios Library


- You will be provided with an HTML structure and boilerplate JavaScript code. 
- Your task is to complete the missing parts of the JavaScript functions so that they successfully fetch real-time Bitcoin and Ethereum prices from the CoinGecko API and update the UI dynamically.


## 🖥️ HTML Structure
- The index.html file contains:
- Two buttons to fetch data using fetch() and Axios.
- A div (id="cryptoData") where cryptocurrency prices will be displayed.

## 📌 What You Need to Implement
- You need to complete the following two functions in src/app.js:
1️⃣ Fetch Crypto Prices Using fetch()
- Fetch data from the API using fetch().
- Convert the response to JSON using await response.json().
- Update the UI dynamically.(This is done for you already)

2️⃣ Fetch Crypto Prices Using Axios
- Fetch data from the API using axios.get().
- Axios automatically parses JSON, so just use response.data.
- Update the UI dynamically(based on the same way it is done for the first function)


## 🔬 Running Jasmine Tests
- We have provided Jasmine test cases to validate your implementation.
- Test cases are visible in the output preview.

## Expected Test Output (When Tests Pass)
```
Crypto Price Fetching and UI Update
  ✓ should fetch crypto prices using fetch() and update the UI correctly
  ✓ should fetch crypto prices using Axios and update the UI correctly
```

## 📌 Submission Guidelines
✅ Ensure both fetch() and Axios implementations work correctly.
✅ Verify that the UI updates with real-time crypto prices.
✅ Run Jasmine test cases before submission.

🚀 Great job! You've now built a real-time Crypto Price Tracker using APIs! 💰🔥
