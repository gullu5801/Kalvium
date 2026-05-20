function TransactionList({ transactions, deleteTransaction }) {

  return (
    <div className="transaction-list">

      <h2>Transactions</h2>

      {
        transactions.map((item) => (

          <div
            key={item.id}
            className={`transaction ${item.type}`}
          >

            <div>
              <h4>{item.title}</h4>
              <p>₹ {item.amount}</p>
            </div>

            <button
              onClick={() => deleteTransaction(item.id)}
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default TransactionList;