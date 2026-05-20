import Navbar from "../components/Navbar";
import AddTripForm from "../components/AddTripForm";
import { useState } from "react";

function AddTrip() {
  const [trips, setTrips] = useState([]);

  return (
    <>
      <Navbar />

      <AddTripForm
        trips={trips}
        setTrips={setTrips}
      />
    </>
  );
}

export default AddTrip;