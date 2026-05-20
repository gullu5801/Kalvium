# Personal Finance Tracker

## Selected Problem Statement
**Option 5 – Personal Finance Tracker**

## Description
A clean, dark-themed React application to track personal income and expenses. Users can add transactions with categories, view a live balance summary, filter by type, and visualise monthly spending with a bar chart.

## Features Implemented
- **Dashboard** – Live balance, total income, total expenses
- **Add Transaction Page** – Title, amount, type (income/expense), category picker, optional note
- **Transaction List Page** – Full list with filter tabs (All / Income / Expense)
- **Delete Transaction** – Remove any entry with a single click
- **Category System** – 7 categories (food, transport, shopping, health, salary, freelance, other)
- **Monthly Bar Chart** – Visual breakdown of income vs expenses per month (Recharts)
- **localStorage Persistence** – Data survives page refresh via `useEffect`
- **Responsive UI** – Works on mobile and desktop
- **React Router** – 3 pages: Dashboard, Transactions, Add Transaction

## Tech Stack
- React 18 (Vite)
- React Router DOM v6
- Recharts (bar chart)
- CSS custom properties (no external UI library)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── BalanceCard.jsx / .css
│   ├── TransactionList.jsx / .css
│   └── SpendingChart.jsx / .css
├── pages/
│   ├── Dashboard.jsx / .css
│   ├── TransactionListPage.jsx
│   └── AddTransaction.jsx / .css
├── App.jsx
├── main.jsx
└── index.css
```

## Steps to Run the Project
```bash
npm install
npm start
```
Then open http://localhost:5173 in your browser.

> Note: This project uses Vite. `npm start` is aliased to `vite` in package.json.

## Additional Notes
- No backend required – all data stored in browser localStorage
- `useEffect` is used to sync state to localStorage on every change
- `useState` manages transactions array and all form fields
- The chart groups transactions by month automatically
