import { useState } from "react";

function AddTransaction() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title,
      amount,
      type,
      category,
    };

    console.log(newTransaction);

    alert("Transaction Added ✅");

    setTitle("");
    setAmount("");
    setCategory("");
    setType("income");
  };

  return (
    <div className="form-container">

      <h1>Add Transaction</h1>

      <form onSubmit={handleSubmit} className="transaction-form">

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

        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">
          Add Transaction
        </button>

      </form>

    </div>
  );
}

export default AddTransaction;