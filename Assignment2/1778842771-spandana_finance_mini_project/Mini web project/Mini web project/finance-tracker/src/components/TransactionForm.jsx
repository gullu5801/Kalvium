import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TransactionForm({ addTransaction }) {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("Income")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
      type
    }

    addTransaction(newTransaction)

    navigate("/")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Amount"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">
        Add Transaction
      </button>

    </form>
  )
}

export default TransactionForm