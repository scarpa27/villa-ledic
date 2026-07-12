import ApartmentCard from "../components/ApartmentCard";
import { apartments } from "../data/apartments";

// The Accommodation page reuses the same ApartmentCard component and the
// same apartments.js data as the Home page preview. Only the amount of
// apartments shown and the surrounding page content are different.
// Bootstrap's grid classes control how many cards sit per row at each screen size:
// col-lg-4  -> 3 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
function Accommodation() {
  return (
    <div className="accommodation-page">
      <div className="container">
        <header className="accommodation-header">
          <h1 className="accommodation-title">Accommodation</h1>
          <p className="accommodation-subtitle">
            Choose the apartment that fits your stay in Krvavica.
          </p>
          <p className="accommodation-intro">
            All of our apartments are family-run and located just a short
            walk from the beach. Browse the full list below to compare
            sizes, views and features, and get in touch if you have any
            questions.
          </p>
        </header>

        <div className="row">
          {/* We render one column per apartment using .map() instead of writing
              each card by hand, so adding/removing an apartment only requires
              editing src/data/apartments.js */}
          {apartments.map((apartment) => (
            <div className="col-12 col-md-6 col-lg-4" key={apartment.id}>
              <ApartmentCard
                id={apartment.id}
                name={apartment.name}
                capacity={apartment.capacity}
                size={apartment.size}
                beds={apartment.beds}
                view={apartment.view}
                features={apartment.features}
                image={apartment.image}
                buttonText={apartment.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
