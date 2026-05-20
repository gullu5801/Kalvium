import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TripCard from "../components/TripCard";
import AddTripForm from "../components/AddTripForm";

function Home() {
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");

    return savedTrips
      ? JSON.parse(savedTrips)
      : [
          {
            id: 1,
            destination: "Goa",
            date: "20 June 2026",
          },
          {
            id: 2,
            destination: "Delhi",
            date: "15 July 2026",
          },
          {
            id: 3,
            destination: "Manali",
            date: "5 August 2026",
          },
        ];
  });

  const [selectedTrip, setSelectedTrip] =
    useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Book hotel",
      completed: false,
    },
    {
      id: 2,
      text: "Pack bags",
      completed: false,
    },
    {
      id: 3,
      text: "Buy tickets",
      completed: false,
    },
  ]);

  useEffect(() => {
    localStorage.setItem(
      "trips",
      JSON.stringify(trips)
    );
  }, [trips]);

  const deleteTrip = (id) => {
    setTrips(
      trips.filter(
        (trip) => trip.id !== id
      )
    );
  };

  const showDetails = (destination) => {
    setSelectedTrip(destination);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  return (
    <>
      <Navbar />

      <AddTripForm
        trips={trips}
        setTrips={setTrips}
      />

      <h1>My Trips</h1>

      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          id={trip.id}
          destination={trip.destination}
          date={trip.date}
          deleteTrip={deleteTrip}
          showDetails={showDetails}
        />
      ))}

      {selectedTrip && (
        <div className="trip-card">
          <h2>{selectedTrip} Itinerary</h2>

          {tasks.map((task) => (
            <p
              key={task.id}
              onClick={() =>
                toggleTask(task.id)
              }
            >
              {task.completed
                ? "✅"
                : "⬜"}{" "}
              {task.text}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;