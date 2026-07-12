import { NavLink } from "react-router-dom";
import logo from "../assets/logo/apartments-ledic-logo.png";

function Navbar() {
  // NavLink provides an isActive flag that we map to an extra CSS class,
  // which global.css uses to highlight the current page link.
  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Apartments Ledić logo" className="navbar-logo" />
          <span className="navbar-brand-text">Apartments Ledić</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/accommodation">
                Accommodation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/explore">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="https://wa.me/385992836969"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-whatsapp-button"
              >
                WhatsApp Inquiry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
