import { createContext, useState } from "react";

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) => setTransactions([...transactions, tx]);

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
}
