import { createContext, useContext, useState, useEffect } from 'react';

const FinanceContext = createContext();

const INITIAL_TRANSACTIONS = [
  { id: 1, title: 'Monthly Salary', amount: 85000, type: 'income', category: 'Salary', date: '2025-05-01', note: 'May salary credit' },
  { id: 2, title: 'Apartment Rent', amount: 18000, type: 'expense', category: 'Housing', date: '2025-05-02', note: '' },
  { id: 3, title: 'Freelance Project', amount: 22000, type: 'income', category: 'Freelance', date: '2025-05-05', note: 'UI design project' },
  { id: 4, title: 'Grocery Shopping', amount: 3200, type: 'expense', category: 'Food', date: '2025-05-06', note: '' },
  { id: 5, title: 'Netflix & Spotify', amount: 1400, type: 'expense', category: 'Entertainment', date: '2025-05-07', note: '' },
  { id: 6, title: 'Electricity Bill', amount: 2100, type: 'expense', category: 'Utilities', date: '2025-05-09', note: '' },
  { id: 7, title: 'Stock Dividend', amount: 4500, type: 'income', category: 'Investment', date: '2025-05-10', note: '' },
  { id: 8, title: 'Gym Membership', amount: 1800, type: 'expense', category: 'Health', date: '2025-05-11', note: '' },
  { id: 9, title: 'Online Course', amount: 4999, type: 'expense', category: 'Education', date: '2025-05-12', note: 'React advanced' },
  { id: 10, title: 'Dinner with Friends', amount: 2600, type: 'expense', category: 'Food', date: '2025-05-13', note: '' },
];

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('ft_transactions');
      return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
    } catch { return INITIAL_TRANSACTIONS; }
  });

  useEffect(() => {
    localStorage.setItem('ft_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions(prev => [{ ...tx, id: Date.now() }, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, deleteTransaction, totalIncome, totalExpense, balance }}>
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinance = () => useContext(FinanceContext);
