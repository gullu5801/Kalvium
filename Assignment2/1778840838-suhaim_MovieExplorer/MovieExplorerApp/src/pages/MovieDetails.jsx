import { useParams } from "react-router-dom";

import movies from "../data/movies";

function MovieDetails({ favorites, setFavorites }) {

  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  const isFavorite = favorites.some(
    (fav) => fav.id === movie.id
  );

  function addToFavorites() {

    if (!isFavorite) {
      setFavorites([...favorites, movie]);
    }

  }

  return (
    <div className="details">

      <img src={movie.image} alt={movie.title} />

      <h1>{movie.title}</h1>

      <p><strong>Genre:</strong> {movie.genre}</p>

      <p><strong>Year:</strong> {movie.year}</p>

      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>

      <p>{movie.description}</p>

      <button onClick={addToFavorites}>
        {isFavorite
          ? "Added to Favorites"
          : "Add to Favorites"}
      </button>

    </div>
  );
}

export default MovieDetails;