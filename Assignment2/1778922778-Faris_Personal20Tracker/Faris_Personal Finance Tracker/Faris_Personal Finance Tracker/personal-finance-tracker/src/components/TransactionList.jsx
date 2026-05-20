function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>

      {transactions.map((item, index) => (
        <div key={index} className="transaction">
          <h4>{item.title}</h4>
          <p>₹{item.amount}</p>
          <p>{item.type}</p>
          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;