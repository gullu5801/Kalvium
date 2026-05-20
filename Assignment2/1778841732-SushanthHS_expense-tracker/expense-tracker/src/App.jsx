import { useState } from "react";
import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Filter from "./components/Filter";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filteredTransactions = transactions.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  return (
    <div>
      <Navbar />

      <div className="container">
        <BalanceCard income={income} expense={expense} />

        <TransactionForm addTransaction={addTransaction} />

        <Filter setFilter={setFilter} />

        <ExpenseChart income={income} expense={expense} />

        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default App;