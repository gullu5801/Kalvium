function TripCard(props) {
  return (
    <div className="trip-card">
      <h3>{props.destination}</h3>

      <p>
        Date: {props.date}
      </p>

      <button
        onClick={() =>
          props.showDetails(props.destination)
        }
      >
        View Details
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          props.deleteTrip(props.id)
        }
      >
        Delete Trip
      </button>
    </div>
  );
}

export default TripCard;