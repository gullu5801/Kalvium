function Balance({ balance, income, expense }) {
  return (
    <div className="balance-box">
      <h2>Balance: ₹{balance}</h2>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>
    </div>
  );
}

export default Balance;