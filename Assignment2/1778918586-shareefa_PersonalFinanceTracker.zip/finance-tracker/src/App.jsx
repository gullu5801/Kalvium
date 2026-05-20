import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Dashboard
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          }
        />

        <Route
          path="/add"
          element={
            <AddTransaction
              addTransaction={addTransaction}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;