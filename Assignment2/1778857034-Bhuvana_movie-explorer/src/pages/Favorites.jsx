function Favorites({ favorites }) {

  return (
    <div className="container">

      <h1>❤️ Favorite Movies</h1>

      <div className="movie-grid">

        {favorites.length === 0 ? (
          <p>No favorite movies added.</p>
        ) : (
          favorites.map((movie) => (
            <div className="card" key={movie.id}>

              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <p>{movie.genre}</p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Favorites;