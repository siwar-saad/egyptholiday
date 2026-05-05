import Navbar from "../../../components/navbar";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="user-page">
      <Navbar />

      <div className="user-container">
        <div className="user-card">
          <div className="user-avatar">S</div>

          <h1>Welcome, Siwar</h1>
          <p>Your Egypt Holiday account is ready.</p>

          <div className="user-info">
            <div>
              <span>Name</span>
              <strong>Siwar Saad</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>siwar@email.com</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>+20 109 999 9234</strong>
            </div>
          </div>

          <div className="user-actions">
            <button>View Packages</button>
            <button className="outline">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}