import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function AddTransaction() {
  const { addTransaction } = useContext(FinanceContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ title, amount: Number(amount), type });
    setTitle(""); setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" placeholder="Amount" />
      <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
