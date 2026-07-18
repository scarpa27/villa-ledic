import { exploreItems } from "../data/explore";

// The Explore page reuses the same explore.js data as ExplorePreview on the
// Home page, but shows the full list with its own page header, instead of
// just a small teaser.
// Bootstrap's grid classes control how many items sit per row at each screen size:
// col-lg-6  -> 2 per row on desktop
// col-12    -> 1 per row on mobile
function Explore() {
  return (
    <div className="explore-page">
      <div className="container">
        <header className="explore-header">
          <h1 className="explore-title">Explore</h1>
          <p className="explore-subtitle">
            Discover Krvavica, Baška Voda and the Makarska Riviera.
          </p>
          <p className="explore-intro">
            Apartments Ledić sits in a peaceful part of the Makarska Riviera,
            close enough to reach beaches, nearby towns and mountain trails
            without a long drive. Here are a few places worth visiting during
            your stay.
          </p>
        </header>

        <div className="row">
          {/* We render one column per place using .map() instead of writing
              each item by hand, so adding/removing a place only requires
              editing src/data/explore.js */}
          {exploreItems.map((item) => (
            <div className="col-12 col-lg-6" key={item.id}>
              <div className="explore-item">
                <h3 className="explore-item-title">{item.title}</h3>
                <p className="explore-item-text">{item.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
