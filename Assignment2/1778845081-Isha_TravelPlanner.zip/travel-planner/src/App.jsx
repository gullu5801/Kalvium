import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import TripDetails from "./pages/TripDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-trip"
          element={<AddTrip />}
        />

        <Route
          path="/trip-details"
          element={<TripDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;