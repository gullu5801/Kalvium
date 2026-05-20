import MovieCard from "../components/MovieCard";

function Favorites({ favorites }) {

  return (
    <div className="home">

      <h1>Favorite Movies</h1>

      <div className="movie-grid">

        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Favorites;