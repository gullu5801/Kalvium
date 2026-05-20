import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function TransactionList() {
  const { transactions } = useContext(FinanceContext);

  return (
    <div className="container">
      <h1>Transactions</h1>
      {transactions.length === 0 ? (
        <p>No transactions yet. Add one from the form!</p>
      ) : (
        <ul>
          {transactions.map((tx, i) => (
            <li key={i} className={tx.type}>
              <div>
                <strong>{tx.title}</strong>
                <span style={{ marginLeft: "10px", color: "#555" }}>
                  ({tx.type})
                </span>
              </div>
              <div style={{ fontWeight: "bold" }}>₹{tx.amount}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
