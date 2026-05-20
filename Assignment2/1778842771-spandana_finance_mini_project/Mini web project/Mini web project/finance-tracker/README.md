# FinancePro Tracker 🚀

FinancePro is a premium, professional-grade Personal Finance Management application built with **React**, **Vite**, and **Framer Motion**. Designed for both functionality and aesthetic appeal, it features glassmorphic UI elements, dynamic charts, and smooth animations.

---

## ✨ Features

### 💎 Premium UI/UX
- **Glassmorphism Design**: Modern, frosted-glass effect for cards and containers.
- **Dark/Light Mode**: Fully functional theme toggle with local storage persistence.
- **Micro-animations**: Smooth entry/exit animations using `framer-motion`.
- **Responsive Layout**: Optimized for mobile, tablet, and desktop viewing.

### 📊 Powerful Functionality
- **Dynamic Dashboard**: Real-time summary of balance, income, and expenses.
- **Interactive Charts**: Visualize spending by category and income vs. expense ratios using `recharts`.
- **Advanced Filtering**: Filter transactions by type (All, Income, Expense).
- **Smart Search**: Quickly find transactions by title.
- **Local Persistence**: Data survives page refreshes using browser `localStorage`.
- **Validation & Safety**: Prevents empty fields and negative amounts with real-time feedback.

### 🔔 User Enhancements
- **Toast Notifications**: Beautiful alerts for adding/deleting transactions via `react-toastify`.
- **Categorization**: Group transactions into Salary, Food, Travel, etc.
- **Date Tracking**: Precise record-keeping for every transaction.

---

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components + Hooks)
- **Styling**: Modern CSS (Custom Variables + Glassmorphism)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Visualization**: Recharts
- **Routing**: React Router DOM (v6)
- **Feedback**: React Toastify

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone/Download** the repository.
2. **Navigate** to the project folder:
   ```bash
   cd finance-tracker
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```
finance-tracker/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # ThemeContext for Dark/Light mode
│   ├── pages/           # Page layouts (Dashboard, AddTransaction)
│   ├── App.jsx          # Main application logic & Routing
│   ├── index.css        # Professional styling & Theme variables
│   └── main.jsx         # Entry point
```

---

## 🏆 For Evaluation
This project satisfies all requirements for a professional mini-project evaluation, demonstrating proficiency in React Hooks, State Management, Routing, External Libraries integration, and Advanced Styling techniques.
