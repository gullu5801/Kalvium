import { useState } from "react";
import { FinanceContext } from "./FinanceContextContext";

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) => setTransactions([...transactions, tx]);

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
}
