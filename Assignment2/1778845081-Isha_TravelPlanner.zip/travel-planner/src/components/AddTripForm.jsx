import { useState } from "react";

function AddTripForm({ trips, setTrips }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const addTrip = () => {
    if (destination === "" || date === "") {
      return;
    }

    const newTrip = {
      id: Date.now(),
      destination: destination,
      date: date,
    };

    setTrips([...trips, newTrip]);

    setDestination("");
    setDate("");
  };

  return (
    <div className="form-container">
      <h2>Add New Trip</h2>

      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addTrip}>
        Add Trip
      </button>
    </div>
  );
}

export default AddTripForm;