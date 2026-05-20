function TransactionItem({ item }) {
  return (
    <div className={`transaction ${item.type}`}>

      <div>
        <h3>{item.title}</h3>
        <small>{item.type}</small>
      </div>

      <h3>₹{item.amount}</h3>

    </div>
  );
}

export default TransactionItem;