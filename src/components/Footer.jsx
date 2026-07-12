import { Link } from "react-router-dom";
import { contactInfo } from "../data/contact";

// Nav links are intentionally repeated in the footer so visitors who have
// scrolled to the bottom of a long page don't have to scroll back up.
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="footer-brand">Apartments Ledić</p>
            <p className="footer-description">
              A family-run apartment rental in Krvavica, on the Makarska
              Riviera, offering a relaxed stay close to the beach and the sea.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="footer-link">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/explore" className="footer-link">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="footer-link"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="footer-address">{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Apartments Ledić. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
