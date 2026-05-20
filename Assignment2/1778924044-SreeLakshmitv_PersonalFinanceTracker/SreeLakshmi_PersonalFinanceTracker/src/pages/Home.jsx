import { useState } from "react";
import transactionsData from "../data";

import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import FilterButtons from "../components/FilterButtons";

function Home() {
  const [transactions] = useState(transactionsData);
  const [filter, setFilter] = useState("all");

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  return (
    <div className="container">

      <h1 className="dashboard-title">
        Personal Finance Dashboard
      </h1>

      <BalanceCard
        balance={balance}
        income={income}
        expense={expense}
      />

      <FilterButtons setFilter={setFilter} />

      <div className="transaction-section">
        <h2>Recent Transactions</h2>

        <TransactionList transactions={filteredTransactions} />
      </div>

    </div>
  );
}

export default Home;