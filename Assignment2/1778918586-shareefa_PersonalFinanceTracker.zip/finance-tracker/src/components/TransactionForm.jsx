import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TransactionForm({ addTransaction }) {

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
      type
    };

    addTransaction(newTransaction);

    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

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
  );
}

export default TransactionForm;