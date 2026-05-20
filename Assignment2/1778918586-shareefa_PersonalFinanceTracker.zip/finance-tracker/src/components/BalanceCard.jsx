function BalanceCard({ transactions }) {

  const income = transactions
    .filter(item => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = transactions
    .filter(item => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;

  return (
    <div className="balance-card">

      <h2>Total Balance</h2>

      <h1>₹ {balance}</h1>

      <div className="summary">

        <div>
          <p>Income</p>
          <h3>₹ {income}</h3>
        </div>

        <div>
          <p>Expense</p>
          <h3>₹ {expense}</h3>
        </div>

      </div>

    </div>
  );
}

export default BalanceCard;