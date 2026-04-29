import "./style.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")}>
        Egypt Holiday
      </div>

      <nav className="navbar-links">
        <button className="nav-link-btn" onClick={() => navigate("/")}>
          Flights
        </button>

        <button className="nav-link-btn" onClick={() => navigate("/#destinations")}>
          Packages
        </button>

        <button className="nav-link-btn" onClick={() => navigate("/#info")}>
          Hotels
        </button>

        <button
          className="navbar-user"
          aria-label="User account"
          onClick={() => navigate("/login")}
        >
          <FaUser />
        </button>
      </nav>
    </header>
  );
}