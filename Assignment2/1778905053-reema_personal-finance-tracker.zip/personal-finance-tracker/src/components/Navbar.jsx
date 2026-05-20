import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Finance Tracker</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Transaction</Link>
      </div>
    </nav>
  );
}

export default Navbar;