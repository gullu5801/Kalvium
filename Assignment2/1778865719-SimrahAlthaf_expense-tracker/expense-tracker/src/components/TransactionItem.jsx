import { FaTrash } from "react-icons/fa";

function TransactionItem({ item, deleteTransaction }) {
  return (
    <div className={`transaction ${item.type}`}>
      <div>
        <h3>{item.title}</h3>
        <p>₹ {item.amount}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTransaction(item.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TransactionItem;