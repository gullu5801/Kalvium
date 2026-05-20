import { useState } from "react";

function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title,
      amount,
      type,
      date: new Date().toLocaleDateString(),
    };

    const oldTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    localStorage.setItem(
      "transactions",
      JSON.stringify([...oldTransactions, newTransaction])
    );

    alert("Transaction Added");

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;