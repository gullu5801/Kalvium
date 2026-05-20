import { useEffect, useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import FilterButtons from "../components/FilterButtons";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(saved);
  }, []);

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  return (
    <div className="container">
      <BalanceCard transactions={transactions} />

      <FilterButtons setFilter={setFilter} />

      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default Home;