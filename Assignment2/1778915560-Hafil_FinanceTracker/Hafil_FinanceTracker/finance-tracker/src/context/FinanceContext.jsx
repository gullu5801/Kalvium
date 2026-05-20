import { createContext, useContext, useState, useEffect } from 'react';

const FinanceContext = createContext();

const INITIAL_TRANSACTIONS = [
  { id: 1, title: 'Freelance Payment', amount: 15000, type: 'income', category: 'Freelance', date: '2025-05-01', note: 'Web design project' },
  { id: 2, title: 'Rent', amount: 8000, type: 'expense', category: 'Housing', date: '2025-05-02', note: '' },
  { id: 3, title: 'Grocery Shopping', amount: 1200, type: 'expense', category: 'Food', date: '2025-05-03', note: 'Big Bazaar' },
  { id: 4, title: 'Salary', amount: 45000, type: 'income', category: 'Salary', date: '2025-05-05', note: '' },
  { id: 5, title: 'Netflix', amount: 649, type: 'expense', category: 'Entertainment', date: '2025-05-06', note: '' },
  { id: 6, title: 'Petrol', amount: 800, type: 'expense', category: 'Transport', date: '2025-05-08', note: '' },
  { id: 7, title: 'Dividend', amount: 2300, type: 'income', category: 'Investment', date: '2025-05-10', note: 'Zerodha' },
  { id: 8, title: 'Restaurant', amount: 950, type: 'expense', category: 'Food', date: '2025-05-11', note: 'Dinner with family' },
];

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('ft_transactions');
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('ft_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (txn) => {
    const newTxn = { ...txn, id: Date.now() };
    setTransactions(prev => [newTxn, ...prev]);
    showToast('✅ Transaction added!');
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    showToast('🗑️ Transaction deleted');
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, deleteTransaction, totalIncome, totalExpense, balance, toast }}>
      {children}
    </FinanceContext.Provider>
  );
}

export const useFinance = () => useContext(FinanceContext);
