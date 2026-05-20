# Fintrack – Personal Finance Tracker

## Selected Problem Statement
**Option 5: Personal Finance Tracker**

## Description
Fintrack is a sleek, dark-themed personal finance tracker built with React. It lets you log income and expenses, visualise spending patterns with interactive charts, and filter/search your transaction history — all in a clean single-page application with no backend required.

## Features Implemented
- **Dashboard** – Balance summary cards, monthly Area Chart, Expense Donut Chart, recent transactions
- **Add Transaction Page** – Form with validation, type toggle, category selector, and toast feedback
- **Transactions Page** – Full list with filter (All / Income / Expense), search, and sort
- **Delete Transactions** – Remove any entry with one click
- **Persistent Storage** – localStorage (data survives refresh)
- **Responsive UI** – Works on mobile and desktop
- **Chart Visualisation (Bonus)** – Recharts AreaChart + PieChart

## Tech Stack
React 18 + Vite, React Router DOM v6, Recharts, Context API, CSS Variables

## Steps to Run
```
npm install
npm start
```
Open http://localhost:5173

## Notes
- No backend required — data stored in localStorage
- Sample transactions pre-loaded on first launch
- Amounts in Indian Rupees (₹)
