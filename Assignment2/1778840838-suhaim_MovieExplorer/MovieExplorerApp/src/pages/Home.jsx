import { useState } from "react";


import movies from "../data/movies";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

function Home() {

  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All");


  const filteredMovies = movies.filter((movie) => {

    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  
  return (
    <div className="home">

      <h1>Popular Movies</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <GenreFilter
        genre={genre}
        setGenre={setGenre}
      />

      <div className="movie-grid">

        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;