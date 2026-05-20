import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";

function AddTransaction({ addTransaction }) {

  return (
    <>
      <Navbar />

      <div className="container">

        <h2>Add Transaction</h2>

        <TransactionForm
          addTransaction={addTransaction}
        />

      </div>
    </>
  );
}

export default AddTransaction;