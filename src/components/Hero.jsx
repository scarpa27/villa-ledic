import { Link } from "react-router-dom";
import heroMain from "../assets/images/hero/hero-main.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <p className="hero-label">Family Apartments • Krvavica</p>
            <h1 className="hero-heading">Apartments Ledić</h1>
            <p className="hero-text">
              Enjoy a peaceful stay just 350 meters from the sea in our
              family apartments located in Krvavica on the Makarska Riviera.
            </p>
            <div className="hero-buttons">
              <Link to="/accommodation" className="btn btn-primary">
                View Apartments
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            {/* Wrapper holds the photo and a subtle dark overlay for a
                more premium, hospitality-style look and better contrast. */}
            <div className="hero-image-wrapper">
              <img
                src={heroMain}
                alt="Apartments Ledić in Krvavica"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
