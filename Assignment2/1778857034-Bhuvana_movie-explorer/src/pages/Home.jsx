import { useState } from "react";

import moviesData from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home({ addToFavorites }) {

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filteredMovies = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "" || movie.genre === genre)
  );

  return (
    <div className="container">

      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setGenre(e.target.value)}>

        <option value="">All Genres</option>

        <option value="Sci-Fi">Sci-Fi</option>

        <option value="Action">Action</option>

        <option value="Animation">Animation</option>

      </select>

      <div className="movie-grid">

        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addToFavorites={addToFavorites}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;