import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // test code (later backend)
  const correctCode = "123456";

  // send code
  const handleSend = (e) => {
    e.preventDefault();
    setShowCode(true);
    setError("");

    setCanResend(false);
    setTimeout(() => setCanResend(true), 5000);
  };

  // verify code
  const handleVerify = (e) => {
    e.preventDefault();

    if (code === correctCode) {
      navigate("/reset-password");
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  // resend code
  const handleResend = () => {
    setError("");
    setCanResend(false);
    setShowPopup(true);

    setTimeout(() => setCanResend(true), 5000);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <h1>Forgot Password</h1>
        <p>
          Enter your email and we will send you a verification code.
        </p>

        {/* EMAIL */}
        <form className="forgot-form" onSubmit={handleSend}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send Code</button>
        </form>

        {/* CODE BOX */}
        {showCode && (
          <form className="forgot-form code-box" onSubmit={handleVerify}>
            <input
              type="text"
              placeholder="Enter verification code"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            {error && <span className="error-text">{error}</span>}

            <button type="submit">Verify Code</button>

            <p className="resend-text">
              Didn’t receive the code?{" "}
              <span
                className={canResend ? "active" : "disabled"}
                onClick={canResend ? handleResend : null}
              >
                Resend code
              </span>
            </p>
          </form>
        )}

        {/* BACK */}
        <span
          className="back-login"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </span>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Code Sent</h3>
            <p>
              A new verification code has been sent to your email.
            </p>

            <button onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}