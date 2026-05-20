function BalanceCard({ income, expense }) {
  const balance = income - expense;

  return (
    <div className="balance-card">
      <div>
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>

      <div>
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </div>

      <div>
        <h3>Balance</h3>
        <p>₹{balance}</p>
      </div>
    </div>
  );
}

export default BalanceCard;