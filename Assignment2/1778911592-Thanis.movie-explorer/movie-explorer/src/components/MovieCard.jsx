function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
        width: "220px",
        transition: "0.3s",
        cursor: "pointer",
        backgroundColor: "#1e1e1e",
        color: "white",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        width="200"
        height="300"
        style={{
          borderRadius: "10px",
          objectFit: "cover"
        }}
      />

      <h2>{movie.title}</h2>

      <p>{movie.genre}</p>

      <p>{movie.description}</p>

      <button
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#ff4d4d",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default MovieCard;