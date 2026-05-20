import { useState, useEffect } from "react";

function Dashboard() {

  const [transactions, setTransactions] = useState(() => {

    const savedTransactions =
      localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [
          {
            id: 1,
            title: "Salary",
            amount: 25000,
            type: "income",
          },
          {
            id: 2,
            title: "Shopping",
            amount: 3000,
            type: "expense",
          },
        ];
  });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = () => {

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
    setType("income");
  };

  const deleteTransaction = (id) => {
    const updatedTransactions =
      transactions.filter((item) => item.id !== id);

    setTransactions(updatedTransactions);
  };

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter(
          (item) => item.type === filter
        );

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-8">
        Personal Finance Tracker
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Balance</h2>
          <p className="text-2xl mt-2">₹ {balance}</p>
        </div>

        <div className="bg-green-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Income</h2>
          <p className="text-2xl mt-2">₹ {income}</p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Expense</h2>
          <p className="text-2xl mt-2">₹ {expense}</p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Add Transaction
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={addTransaction}
            className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700"
          >
            Add
          </button>

        </div>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

          <h2 className="text-2xl font-bold">
            Transactions
          </h2>

          <div className="flex gap-2 mt-3 md:mt-0">

            <button
              onClick={() => setFilter("all")}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              All
            </button>

            <button
              onClick={() => setFilter("income")}
              className="bg-green-200 px-4 py-2 rounded-lg"
            >
              Income
            </button>

            <button
              onClick={() => setFilter("expense")}
              className="bg-red-200 px-4 py-2 rounded-lg"
            >
              Expense
            </button>

          </div>

        </div>

        {
          filteredTransactions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >

              <div>
                <p className="font-semibold">{item.title}</p>

                <p className="text-sm text-gray-500">
                  {item.type}
                </p>
              </div>

              <div className="flex items-center gap-4">

                <p
                  className={
                    item.type === "income"
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  ₹ {item.amount}
                </p>

                <button
                  onClick={() => deleteTransaction(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Dashboard;