import { Link } from "react-router-dom";

// ApartmentCard only displays what it is given through props.
// It has no knowledge of the apartments data itself, so it can be reused
// for any apartment (or any similar item) just by passing different props.
function ApartmentCard({
  id,
  name,
  capacity,
  size,
  beds,
  view,
  features,
  image,
  buttonText,
}) {
  // Only show the first 3 features so the card stays short and readable,
  // even if an apartment has many features listed in the data.
  const previewFeatures = features.slice(0, 3);

  return (
    <div className="apartment-card">
      <img src={image} alt={name} className="apartment-card-image" loading="lazy" decoding="async" />
      <div className="apartment-card-body">
        <h3 className="apartment-card-title">{name}</h3>
        <p className="apartment-card-guests">{capacity}</p>
        <p className="apartment-card-text">
          {size} &middot; {beds} &middot; {view}
        </p>
        <ul className="apartment-card-features">
          {previewFeatures.map((feature) => (
            <li className="apartment-card-feature" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={`/accommodation/${id}`}
          className="btn btn-primary apartment-card-button"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default ApartmentCard;
