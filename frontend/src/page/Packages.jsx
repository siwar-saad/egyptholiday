import "./Packages.css";
import Navbar from "../components/navbar";

import sharmImg from "../assets/image/sharm.jpeg";
import cairoImg from "../assets/image/cairo.jpeg";
import dahabImg from "../assets/image/dahab.jpeg";
import aswanImg from "../assets/image/aswan.jpeg";
import LuxorImg from "../assets/image/Luxor.jpg";
import snorkelingImg from "../assets/image/snorkeling.jpg";
import saintImg from "../assets/image/saint-catherine.jpg";
import hurghadaImg from "../assets/image/hurghada.jpg";
import fayoumImg from "../assets/image/fayoum.jpg";
import alexImg from "../assets/image/alexandria.jpg";
import sokhnaImg from "../assets/image/ain-sokhna.jpg";

export default function Packages() {
  const packages = [
    { title: "sharm el sheikh", image: sharmImg },
    { title: "cairo", image: cairoImg },
    { title: "dahab", image: dahabImg },
    { title: "aswan", image: aswanImg },
    { title: "luxor", image: LuxorImg },
    { title: "snorkeling", image: snorkelingImg },
    { title: "saint catherine", image: saintImg },
    { title: "hurghada", image: hurghadaImg },
    { title: "fayoum", image: fayoumImg },
    { title: "alexandria", image: alexImg },
    { title: "ain sokhna", image: sokhnaImg },
  ];

  return (
    <div className="packages-page">
      <Navbar />

      <section className="packages-hero">
        <div className="packages-hero-content">
          <h1>Your Dream Trip Starts Here.</h1>
          <p>
            Discover flexible, affordable plans crafted to fit your budget and
            exceed your expectations.
          </p>
        </div>
      </section>

      <section className="packages-grid-section">
        <div className="packages-grid">
          {packages.map((item, index) => (
            <div className="package-card" key={index}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}