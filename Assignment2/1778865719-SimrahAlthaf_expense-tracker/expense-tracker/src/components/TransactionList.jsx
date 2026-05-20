import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        transactions.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
            deleteTransaction={deleteTransaction}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;