function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  );
}

export default Filter;