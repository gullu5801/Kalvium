function BalanceCard({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;

  return (
    <div className="balance-container">
      <div className="card balance">
        <h2>Balance</h2>
        <p>₹ {balance}</p>
      </div>

      <div className="card income">
        <h2>Income</h2>
        <p>₹ {income}</p>
      </div>

      <div className="card expense">
        <h2>Expense</h2>
        <p>₹ {expense}</p>
      </div>
    </div>
  );
}

export default BalanceCard;