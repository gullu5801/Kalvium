function BalanceCard({ balance, income, expense }) {
  return (
    <div className="balance-card">
      <h2>Total Balance: ₹{balance}</h2>

      <div className="money-details">
        <div>
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div>
          <h3>Expense</h3>
          <p>₹{expense}</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;