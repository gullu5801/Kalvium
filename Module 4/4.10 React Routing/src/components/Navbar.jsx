import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Home
      </NavLink>

      <NavLink to="/about" style={{ marginRight: "10px" }}>
        About
      </NavLink>

      <NavLink to="/contact" style={{ marginRight: "10px" }}>
        Contact
      </NavLink>

      <NavLink to="/user/101">
        User
      </NavLink>
    </nav>
  );
}

export default Navbar;