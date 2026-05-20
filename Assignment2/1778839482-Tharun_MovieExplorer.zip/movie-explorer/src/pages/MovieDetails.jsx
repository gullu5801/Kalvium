import { useParams } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (m) => m.id === Number(id)
  );

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={movie.image}
        alt={movie.title}
        style={{
          width: "300px",
          borderRadius: "10px"
        }}
      />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <h3>Genre: {movie.genre}</h3>

      <h3>Year: {movie.year}</h3>
    </div>
  );
}

export default MovieDetails;