import SectionTitle from "./SectionTitle";
import ApartmentCard from "./ApartmentCard";
import { apartments } from "../data/apartments";

// AccommodationPreview shows a card for each apartment type.
// Bootstrap's grid classes control how many cards sit per row at each screen size:
// col-lg-4  -> 3 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
// All colors/spacing/fonts live in global.css, not here.
function AccommodationPreview() {
  return (
    <section className="accommodation-preview">
      <div className="container">
        <SectionTitle title="Accommodation" />

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
    </section>
  );
}

export default AccommodationPreview;
