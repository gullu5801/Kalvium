import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import { useState, useEffect } from "react";
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    try {
      return saved ? JSON.parse(saved) : [
        { id: 1, title: "Salary", amount: 5000, type: "income", category: "Salary", date: new Date().toISOString() },
        { id: 2, title: "Food", amount: 300, type: "expense", category: "Food", date: new Date().toISOString() }
      ];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
    toast.success('Transaction added successfully!');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
    toast.error('Transaction deleted');
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t));
    toast.info('Transaction updated');
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboard transactions={transactions} onDelete={deleteTransaction} onEdit={editTransaction} />
                  }
                />

                <Route
                  path="/add"
                  element={
                    <AddTransaction addTransaction={addTransaction} />
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>
          <footer className="footer">
            <div className="container">
              <p>&copy; 2026 FinancePro Tracker. Designed for Excellence.</p>
            </div>
          </footer>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
