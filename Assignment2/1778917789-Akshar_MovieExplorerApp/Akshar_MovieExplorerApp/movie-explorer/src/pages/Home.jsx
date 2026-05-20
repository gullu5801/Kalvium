import { useState } from "react";
import moviesData from "../data/movies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filteredMovies = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "" || movie.genre === genre)
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <GenreFilter genre={genre} setGenre={setGenre} />

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;