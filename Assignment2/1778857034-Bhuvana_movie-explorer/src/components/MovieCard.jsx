import { Link } from "react-router-dom";

function MovieCard({ movie, addToFavorites }) {

  return (
    <div className="card">

      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <button
        onClick={() => addToFavorites(movie)}
      >
        ❤️ Add to Favorites
      </button>

      <br /><br />

      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default MovieCard;