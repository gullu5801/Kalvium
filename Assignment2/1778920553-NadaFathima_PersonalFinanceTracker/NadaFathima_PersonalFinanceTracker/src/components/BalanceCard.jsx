function BalanceCard({ balance, income, expense }) {
  return (
    <div className="balance-container">

      <div className="card">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>

      <div className="card income">
        <h3>Total Income</h3>
        <p>₹{income}</p>
      </div>

      <div className="card expense">
        <h3>Total Expense</h3>
        <p>₹{expense}</p>
      </div>

    </div>
  );
}

export default BalanceCard;