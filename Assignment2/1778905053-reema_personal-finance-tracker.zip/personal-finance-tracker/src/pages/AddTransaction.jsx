import Navbar from "../components/Navbar";

function AddTransaction() {
  return (
    <div className="container">
      <Navbar />

      <h2>Add Transaction</h2>

      <form className="card">
        <input type="text" placeholder="Title" />

        <input type="number" placeholder="Amount" />

        <select>
          <option>income</option>
          <option>expense</option>
        </select>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;