import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Dashboard() {
  const { transactions } = useContext(FinanceContext);

  // Calculate balance, income, expense
  const balance = transactions.reduce(
    (acc, tx) => (tx.type === "income" ? acc + tx.amount : acc - tx.amount),
    0
  );

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  return (
    <div className="container">
      <h1>Dashboard</h1>

      {/* Balance Card */}
      <div
        style={{
          background: "#3498db",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h2>Balance</h2>
        <h1>₹{balance}</h1>
      </div>

      {/* Income & Expense Summary */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div
          style={{
            flex: 1,
            background: "#2ecc71",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>
        <div
          style={{
            flex: 1,
            background: "#e74c3c",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Expense</h3>
          <p>₹{expense}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.slice(-5).map((tx, i) => (
          <li key={i} className={tx.type}>
            {tx.title} - ₹{tx.amount} ({tx.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
