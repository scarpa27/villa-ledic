import SectionTitle from "./SectionTitle";
import { exploreItems } from "../data/explore";

// ExplorePreview highlights nearby places worth visiting.
// Bootstrap's grid classes control how many items sit per row at each screen size:
// col-lg-3  -> 4 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
// All colors/spacing live in global.css, not here.
function ExplorePreview() {
  return (
    <section className="explore-preview">
      <div className="container">
        <SectionTitle title="Explore" />

        <h2 className="explore-heading">
          Discover Krvavica and the Makarska Riviera
        </h2>

        <p className="explore-text">
          From quiet beaches to mountain views, Villa Ledić is a peaceful
          base for exploring Dalmatia.
        </p>

        <div className="row">
          {/* We render one column per place using .map() instead of writing
              each item by hand, so adding/removing a place only requires
              editing src/data/explore.js */}
          {exploreItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-3" key={item.id}>
              <div className="explore-item">
                <h3 className="explore-item-title">{item.title}</h3>
                <p className="explore-item-text">{item.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExplorePreview;
