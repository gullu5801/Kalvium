import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter(
          (item) => item.type === filter
        );

  return (
    <div>
      <Navbar />

      <div className="container">
        <BalanceCard transactions={transactions} />

        <TransactionForm addTransaction={addTransaction} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;