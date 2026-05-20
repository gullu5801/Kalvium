import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title,
      amount,
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Enter amount"
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