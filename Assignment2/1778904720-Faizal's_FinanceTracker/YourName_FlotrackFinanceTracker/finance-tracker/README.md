# Flotrack — Personal Finance Tracker

## Project Title
**Flotrack** – A Personal Finance Tracker Web Application

## Selected Problem Statement
**Option 5: Personal Finance Tracker**
Build an app to track income and expenses with a dashboard, transaction management, filtering, and chart visualization.

---

## Description
Flotrack is a sleek, dark-themed personal finance tracker built with React. It allows users to monitor their income and expenses through an intuitive dashboard, manage transactions with powerful filtering, and gain insights via multiple interactive chart visualizations. All data persists locally using localStorage.

---

## Features Implemented

### Pages & Components
- **Dashboard** – Balance summary cards, recent transactions, expense breakdown pie chart, quick stats
- **Transactions** – Full list with search, filter by type (income/expense), category chips, sort options
- **Add Transaction** – Form with income/expense toggle, live preview card, validation, success state
- **Charts / Analytics** – 4 chart types: Balance trend (area), Income vs Expense (bar), Expense breakdown (donut), Income sources (horizontal bar)

### Core Features
- React Functional Components throughout
- useState and useEffect hooks
- React Router v6 for navigation
- Global state via React Context API
- localStorage persistence
- Filter by type, category, keyword search, and sort order
- Form validation with error messages
- Responsive design (mobile-friendly)
- BONUS: 4 interactive chart visualizations using Recharts

### Component Structure
```
src/
├── context/
│   └── FinanceContext.jsx
├── components/
│   ├── Navbar.jsx / .css
│   ├── StatCard.jsx / .css
│   └── TransactionItem.jsx / .css
├── pages/
│   ├── Dashboard.jsx / .css
│   ├── Transactions.jsx / .css
│   ├── AddTransaction.jsx / .css
│   └── Charts.jsx / .css
├── App.jsx
├── main.jsx
└── index.css
```

---

## Steps to Run the Project

### Prerequisites
- Node.js v18+
- npm v8+

### Run
```bash
npm install
npm run dev
# Open: http://localhost:5173
```

Note: This project uses Vite. The command is `npm run dev` (not `npm start`).
For CRA compatibility: a start script is also included that runs `npm run dev`.

---

## Tech Stack
- React 18 + Vite
- React Router v6
- Recharts (chart visualizations)
- CSS Custom Properties (theming)
- localStorage (data persistence)

---

## Additional Notes
1. No backend — all data stored in browser localStorage
2. 10 sample transactions pre-loaded on first visit
3. Currency in Indian Rupees (INR / en-IN locale)
4. Google Fonts loaded via CDN — internet required for optimal display
5. Screenshots are in the screenshots/ folder
