import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
      type,
    };

    const oldTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    const updatedTransactions = [...oldTransactions, newTransaction];

    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );

    alert("Transaction Added Successfully");

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;