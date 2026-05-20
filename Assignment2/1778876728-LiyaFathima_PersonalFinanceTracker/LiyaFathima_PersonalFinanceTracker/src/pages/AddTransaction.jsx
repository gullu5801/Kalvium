import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  const addTransaction = (data) => {
    console.log(data);
    alert("Transaction Added Successfully");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Add Transaction</h2>

        <TransactionForm addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default AddTransaction;