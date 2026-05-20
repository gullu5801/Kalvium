import { useState } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>

      <Balance
        balance={balance}
        income={income}
        expense={expense}
      />

      <TransactionForm addTransaction={addTransaction} />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;