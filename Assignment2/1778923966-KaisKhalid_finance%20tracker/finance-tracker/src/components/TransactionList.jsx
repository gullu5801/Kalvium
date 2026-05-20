function TransactionList({ transactions }) {
  return (
    <div className="list-box">
      <h2>Transactions</h2>

      {transactions.map((item, index) => (
        <div key={index} className="transaction-item">
          <p>{item.title}</p>
          <p>₹{item.amount}</p>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;