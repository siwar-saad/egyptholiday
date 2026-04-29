import { useState } from "react";
import "./Login.css";
import loginImg from "../assets/image/login.png";
import Navbar from "../components/navbar";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <div className="login-left">
          <h1>log In</h1>

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <a href="#" className="forgot-password">
              Forgot Password
            </a>

            <button type="submit">Log In</button>

            <div className="login-social">
              <span>Or login with</span>
              <div className="social-icons">
                <span>G</span>
                <span>f</span>
              </div>
            </div>
          </form>
        </div>

        <div className="login-right">
          <div className="login-image-box">
            <img src={loginImg} alt="Egypt queen" />
          </div>
        </div>
      </div>
    </div>
  );
}