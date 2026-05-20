function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        transactions.map((item) => (
          <div key={item.id} className="transaction-card">
            <div>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </div>

            <h3>₹{item.amount}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;