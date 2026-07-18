import { Link } from "react-router-dom";

// NotFound is shown whenever a visitor lands on a URL that doesn't match
// any of the routes defined in App.jsx (typo, old link, etc.).
function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-lg not-found-button">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
