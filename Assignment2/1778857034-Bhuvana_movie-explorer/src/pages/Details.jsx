import { useParams } from "react-router-dom";
import movies from "../data/movies";

function Details() {

  const { id } = useParams();

  const movie = movies.find((m) => m.id == id);

  return (
    <div className="details">

      <img src={movie.image} alt={movie.title} />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <h3>Genre: {movie.genre}</h3>

      <h3>Rating: {movie.rating}</h3>

    </div>
  );
}

export default Details;