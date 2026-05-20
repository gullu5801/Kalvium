import { useEffect, useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import FilterButtons from "../components/FilterButtons";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions")
    );

    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  return (
    <div className="container">
      <BalanceCard
        balance={balance}
        income={income}
        expense={expense}
      />

      <FilterButtons setFilter={setFilter} />

      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default Dashboard;