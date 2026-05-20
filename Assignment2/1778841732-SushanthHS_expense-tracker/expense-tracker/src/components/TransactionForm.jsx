import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      id: Date.now(),
      title,
      amount,
      type,
    });

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;