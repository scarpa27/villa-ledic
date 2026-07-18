import { galleryItems } from "../data/gallery";

// The Gallery page reuses the same gallery.js data as GalleryPreview on the
// Home page, but shows the full set of photos with its own page header,
// instead of just a small teaser.
// Bootstrap's grid classes control how many images sit per row at each screen size:
// col-lg-4  -> 3 per row on desktop
// col-md-6  -> 2 per row on tablet
// col-12    -> 1 per row on mobile
function Gallery() {
  return (
    <div className="gallery-page">
      <div className="container">
        <header className="gallery-header">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle">
            A look inside Apartments Ledić and the peaceful surroundings of
            Krvavica.
          </p>
        </header>

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
    </div>
  );
}

export default Gallery;
