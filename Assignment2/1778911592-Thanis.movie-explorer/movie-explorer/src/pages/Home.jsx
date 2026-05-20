import { useState, useEffect } from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Home Page Loaded");
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Explorer</h1>

      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px"
        }}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;