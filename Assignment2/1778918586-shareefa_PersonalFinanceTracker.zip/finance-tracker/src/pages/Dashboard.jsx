import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import FilterButtons from "../components/FilterButtons";

import { useState } from "react";

function Dashboard({ transactions, deleteTransaction }) {

  const [filter, setFilter] = useState("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter(
          item => item.type === filter
        );

  return (
    <>
      <Navbar />

      <div className="container">

        <BalanceCard transactions={transactions} />

        <FilterButtons setFilter={setFilter} />

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
        />

      </div>
    </>
  );
}

export default Dashboard;