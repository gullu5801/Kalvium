import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

function App() {

  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MovieDetails
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;