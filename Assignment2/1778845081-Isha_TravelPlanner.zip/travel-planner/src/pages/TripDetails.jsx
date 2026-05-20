import Navbar from "../components/Navbar";
import { useState } from "react";

function TripDetails() {
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

      <div className="trip-card">
        <h2>Trip Itinerary</h2>

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
    </>
  );
}

export default TripDetails;