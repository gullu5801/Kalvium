import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>

      <Link to={`/movie/${movie.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;