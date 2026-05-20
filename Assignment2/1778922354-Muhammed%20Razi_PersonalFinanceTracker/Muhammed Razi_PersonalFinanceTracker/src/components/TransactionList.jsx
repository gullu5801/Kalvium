import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TransactionList;