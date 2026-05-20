import { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const addTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
      type,
    };

    setTransactions([...transactions, newTransaction]);

    setTitle('');
    setAmount('');
  };

  const totalBalance = transactions.reduce((acc, item) => {
    return item.type === 'income'
      ? acc + Number(item.amount)
      : acc - Number(item.amount);
  }, 0);

  return (
    <div className="container">
      <h1>Finance Tracker</h1>

      <div className="balance">
        Balance: ₹ {totalBalance}
      </div>

      <form onSubmit={addTransaction}>
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

      <div className="transactions">
        {transactions.map((item) => (
          <div
            key={item.id}
            className={item.type}
          >
            <h3>{item.title}</h3>

            <p>
              ₹ {item.amount} - {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
