import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ color: "white" }}>
        Movie Explorer
      </h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "15px",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/favorites"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;