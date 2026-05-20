import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import TransactionList from "./pages/TransactionList";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#3498db" }}>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
        <Link to="/add" style={{ marginRight: "15px", color: "white" }}>Add Transaction</Link>
        <Link to="/transactions" style={{ color: "white" }}>Transactions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/transactions" element={<TransactionList />} />
      </Routes>
    </Router>
  );
}

export default App;
