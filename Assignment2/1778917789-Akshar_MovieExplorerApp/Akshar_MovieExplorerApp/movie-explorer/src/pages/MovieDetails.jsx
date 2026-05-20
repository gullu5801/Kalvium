import { useParams } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (m) => m.id === Number(id)
  );

  return (
    <div className="details-container">
      <div className="details-card">

        <img src={movie.image} alt={movie.title} />

        <div className="details-info">
          <h1>{movie.title}</h1>

          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>

          <p>
            <strong>Year:</strong> {movie.year}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.rating}
          </p>

          <p>
            {movie.description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default MovieDetails;