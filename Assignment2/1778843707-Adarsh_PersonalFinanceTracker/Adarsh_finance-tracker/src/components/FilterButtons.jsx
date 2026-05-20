export default function FilterButtons({ selectedType, onFilter }) {
  return (
    <div className="filter-buttons">
      <button
        className={`btn ${selectedType === 'all' ? 'active' : ''}`}
        onClick={() => onFilter('all')}
      >
        All
      </button>
      <button
        className={`btn ${selectedType === 'income' ? 'active' : ''}`}
        onClick={() => onFilter('income')}
      >
        Income
      </button>
      <button
        className={`btn ${selectedType === 'expense' ? 'active' : ''}`}
        onClick={() => onFilter('expense')}
      >
        Expenses
      </button>
    </div>
  )
}
