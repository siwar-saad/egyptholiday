import { useNavigate } from "react-router-dom";
import "./Login.css";
import pyramid from "../assets/image/pyramid.webp";
import passport from "../assets/image/passport.webp";
import visa from "../assets/image/visa.webp";
import login from "../assets/image/login.png";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <div className="auth-shape"></div>

          <img src={login} alt="Egypt Holiday" className="auth-brand-image" />

          <img src={pyramid} className="auth-icon icon-pyramid" alt="pyramid" />
          <img
            src={passport}
            className="auth-icon icon-passport"
            alt="passport"
          />
          <img src={visa} className="auth-icon icon-visa" alt="visa" />
        </div>

        <div className="auth-right">
          <h2>Sign Up</h2>

          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="number" placeholder="Phone" required />

            <button type="submit">Sign Up</button>

            <p className="auth-switch">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
