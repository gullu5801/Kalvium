import { useState, useEffect } from "react";
import moviesData from "../data/movies";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (genre === "" || movie.genre === genre)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Popular Movies</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "10px",
          marginRight: "10px",
          marginBottom: "20px"
        }}
      />

      <select
        value={genre}
        onChange={(e) =>
          setGenre(e.target.value)
        }
        style={{
          padding: "10px",
          marginBottom: "20px"
        }}
      >
        <option value="">All Genres</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h3>{movie.title}</h3>

            <p>{movie.genre}</p>

            <p>{movie.year}</p>

            <Link to={`/movie/${movie.id}`}>
              <button>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;