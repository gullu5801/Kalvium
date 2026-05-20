function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
          <p>₹ {item.amount}</p>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;