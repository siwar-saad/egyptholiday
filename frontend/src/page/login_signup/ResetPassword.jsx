import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
  e.preventDefault();

  if (password !== confirm) {
    setError("Passwords do not match");
    return;
  }

  navigate("/");
};

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <h1>Reset Password</h1>

        <form className="forgot-form" onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && <span className="error-text">{error}</span>}

          <button type="submit">Save</button>
        </form>

      </div>
    </div>
  );
}