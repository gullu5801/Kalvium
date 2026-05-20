function BalanceCard({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  return (
    <div className="card">
      <h2>Balance Summary</h2>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>
      <h3>Balance: ₹{income - expense}</h3>
    </div>
  );
}

export default BalanceCard;