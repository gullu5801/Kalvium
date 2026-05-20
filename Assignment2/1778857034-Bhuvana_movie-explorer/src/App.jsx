import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {

    const alreadyExists = favorites.find(
      (fav) => fav.id === movie.id
    );

    if (!alreadyExists) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home addToFavorites={addToFavorites} />
          }
        />

        <Route
          path="/movie/:id"
          element={<Details />}
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