function Filter({ setFilter }) {
  return (
    <div className="filter">
      <h2>Filter</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>
    </div>
  );
}

export default Filter;