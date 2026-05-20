import { useState } from "react";
import mockTransactions from "../data/mockData";
import FilterButtons from "../components/FilterButtons";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {

  const [filter, setFilter] = useState("all");

  const filteredTransactions =
    filter === "all"
      ? mockTransactions
      : mockTransactions.filter(
          (item) => item.type === filter
        );

  const income = mockTransactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = mockTransactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="dashboard">

      <h1 className="title">
        Personal Finance Tracker
      </h1>

      <div className="cards">

        <div className="card balance">
          <h3>Total Balance</h3>
          <p>₹ {balance}</p>
        </div>

        <div className="card income">
          <h3>Income</h3>
          <p>₹ {income}</p>
        </div>

        <div className="card expense">
          <h3>Expenses</h3>
          <p>₹ {expense}</p>
        </div>

      </div>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  }}
>
  <ExpenseChart />
</div>

      <FilterButtons setFilter={setFilter} />

      <div className="transactions">

        <h2>Transactions</h2>

        {filteredTransactions.map((item) => (
          <div className="transaction-item" key={item.id}>

            <div>
              <h4>{item.title}</h4>
              <p>{item.category}</p>
            </div>

            <span
              className={
                item.type === "income"
                  ? "amount income-text"
                  : "amount expense-text"
              }
            >
              ₹ {item.amount}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;