function FilterButtons({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Income")}>Income</button>
      <button onClick={() => setFilter("Expense")}>Expense</button>
    </div>
  );
}

export default FilterButtons;