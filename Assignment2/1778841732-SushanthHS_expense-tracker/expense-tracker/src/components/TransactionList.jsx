function TransactionList({ transactions }) {
  return (
    <div className="list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions added</p>
      ) : (
        transactions.map((item) => (
          <div
            key={item.id}
            className={`transaction ${item.type.toLowerCase()}`}
          >
            <div>
              <h4>{item.title}</h4>
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