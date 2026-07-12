import SectionTitle from "./SectionTitle";
import { galleryItems } from "../data/gallery";

// GalleryPreview shows a small grid of photos on the Home page.
// Bootstrap's grid classes control how many images sit per row at each screen size:
// col-lg-4  -> 3 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
// All colors/spacing live in global.css, not here.
function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <div className="container">
        <SectionTitle title="Gallery" />

        <h2 className="gallery-heading">Moments from Apartments Ledić</h2>

        <p className="gallery-text">
          A first look at the house, apartments and peaceful surroundings in
          Krvavica.
        </p>

        <div className="row">
          {/* We render one column per photo using .map() instead of writing
              each image by hand, so adding/removing a photo only requires
              editing src/data/gallery.js */}
          {galleryItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
