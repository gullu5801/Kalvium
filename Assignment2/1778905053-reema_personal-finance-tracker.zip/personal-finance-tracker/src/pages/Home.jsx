import { useState } from "react";

function Home() {

  const [transactions, setTransactions] = useState([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const addTransaction = () => {

    const newTransaction = {
      title: title,
      amount: Number(amount),
      type: type
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
    setType("Income");
  };

  const income = transactions
    .filter(item => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter(item => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  return (
    <div style={{ padding: "20px" }}>

      <h1>Personal Finance Tracker</h1>

      <h2>Balance: ₹{balance}</h2>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>

      <div style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        width: "300px"
      }}>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            padding: "8px"
          }}
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            padding: "8px"
          }}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            width: "100%",
            padding: "8px"
          }}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button
          onClick={addTransaction}
          style={{
            padding: "10px",
            width: "100%"
          }}
        >
          Add Transaction
        </button>

      </div>

      <h2>Transactions</h2>

      {transactions.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            width: "300px"
          }}
        >
          <h3>{item.title}</h3>
          <p>₹{item.amount}</p>
          <p>{item.type}</p>
        </div>
      ))}

    </div>
  );
}

export default Home;