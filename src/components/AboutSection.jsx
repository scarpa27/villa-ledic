import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { about } from "../data/about";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={about.image}
              alt="Terrace and exterior of Apartments Ledić"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="col-lg-6">
            <SectionTitle title={about.label} />
            <h2 className="about-heading">{about.heading}</h2>
            <p className="about-text">{about.paragraph}</p>
            <div className="about-buttons">
              {about.buttons.map((button) => (
                <Link
                  key={button.text}
                  to={button.to}
                  className={
                    button.variant === "primary"
                      ? "btn btn-primary"
                      : "btn btn-outline-secondary"
                  }
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
