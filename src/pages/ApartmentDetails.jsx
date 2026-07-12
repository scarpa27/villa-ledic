import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apartments } from "../data/apartments";
import { contactInfo } from "../data/contact";
import { locationDistances } from "../data/location";
import AvailabilityCalendar from "../components/AvailabilityCalendar";
import ApartmentGallery from "../components/ApartmentGallery";
import ApartmentLightbox from "../components/ApartmentLightbox";
import "../styles/apartment-details.css";

function ApartmentDetails() {
  const { id } = useParams();
  const apartment = apartments.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(
    apartment ? apartment.gallery[0] : null,
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentIndex = apartment
    ? apartment.gallery.indexOf(selectedImage)
    : 0;

  // useState only initialises once, so reset when the user navigates to a
  // different apartment route without the component unmounting.
  useEffect(() => {
    if (apartment) {
      setSelectedImage(apartment.gallery[0]);
      setIsLightboxOpen(false);
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Add .visible to each .fade-up element as it scrolls into view.
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  const goToNext = () => {
    setSelectedImage(
      apartment.gallery[(currentIndex + 1) % apartment.gallery.length],
    );
  };

  const goToPrevious = () => {
    setSelectedImage(
      apartment.gallery[
        (currentIndex - 1 + apartment.gallery.length) %
          apartment.gallery.length
      ],
    );
  };

  if (!apartment) {
    return (
      <div className="apartment-details-page">
        <div className="container">
          <p className="apartment-details-not-found">Apartment not found</p>
        </div>
      </div>
    );
  }

  // Studios have no "Bedroom N:" labels in the beds string, so bedroomCount
  // is 0 and we show the raw beds string (e.g. "1 double bed") verbatim.
  const bedroomCount = (apartment.beds.match(/Bedroom \d+/gi) || []).length;
  const bedsLabel = bedroomCount > 0 ? "Bedrooms" : "Beds";
  const bedsValue =
    bedroomCount > 0
      ? `${bedroomCount} Bedroom${bedroomCount > 1 ? "s" : ""}`
      : apartment.beds;

  // Show bathroom and Wi-Fi cards only when the data records them.
  const hasBathroom = apartment.amenities.some((a) => /bath|shower/i.test(a));
  const hasWifi = [...apartment.features, ...apartment.amenities].some((s) =>
    /wi-?fi|internet/i.test(s),
  );

  const lightboxAlt = `${apartment.name} – image ${currentIndex + 1} of ${apartment.gallery.length}`;

  return (
    <div className="apartment-details-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="apartment-details-breadcrumb" aria-label="breadcrumb">
          <Link to="/" className="apartment-details-breadcrumb-link">
            Home
          </Link>
          <span className="apartment-details-breadcrumb-separator">/</span>
          <Link
            to="/accommodation"
            className="apartment-details-breadcrumb-link"
          >
            Accommodation
          </Link>
          <span className="apartment-details-breadcrumb-separator">/</span>
          <span className="apartment-details-breadcrumb-current">
            {apartment.name}
          </span>
        </nav>

        {/* Gallery + info panel */}
        <div className="row">
          <div className="col-12 col-lg-7">
            <ApartmentGallery
              images={apartment.gallery}
              apartmentName={apartment.name}
              selectedImage={selectedImage}
              currentIndex={currentIndex}
              onSelect={setSelectedImage}
              onNext={goToNext}
              onPrevious={goToPrevious}
              onOpenLightbox={() => setIsLightboxOpen(true)}
            />
          </div>

          <div className="col-12 col-lg-5">
            <h1 className="apartment-details-title">{apartment.name}</h1>
            <p className="apartment-details-guests">{apartment.capacity}</p>
            <p className="apartment-details-description">
              {apartment.description}
            </p>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg apartment-details-whatsapp-button"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* Quick information cards */}
        <div className="ad-info-grid fade-up">
          <div className="ad-info-card">
            <span className="ad-info-icon" aria-hidden="true">👥</span>
            <div>
              <div className="ad-info-label">Guests</div>
              <div className="ad-info-value">{apartment.capacity}</div>
            </div>
          </div>

          <div className="ad-info-card">
            <span className="ad-info-icon" aria-hidden="true">📐</span>
            <div>
              <div className="ad-info-label">Size</div>
              <div className="ad-info-value">{apartment.size}</div>
            </div>
          </div>

          <div className="ad-info-card">
            <span className="ad-info-icon" aria-hidden="true">🛏</span>
            <div>
              <div className="ad-info-label">{bedsLabel}</div>
              <div className="ad-info-value">{bedsValue}</div>
            </div>
          </div>

          {hasBathroom && (
            <div className="ad-info-card">
              <span className="ad-info-icon" aria-hidden="true">🚿</span>
              <div>
                <div className="ad-info-label">Bathroom</div>
                <div className="ad-info-value">Private Bathroom</div>
              </div>
            </div>
          )}

          {apartment.hasSeaView && (
            <div className="ad-info-card">
              <span className="ad-info-icon" aria-hidden="true">🌊</span>
              <div>
                <div className="ad-info-label">View</div>
                <div className="ad-info-value">{apartment.view}</div>
              </div>
            </div>
          )}

          {hasWifi && (
            <div className="ad-info-card">
              <span className="ad-info-icon" aria-hidden="true">📶</span>
              <div>
                <div className="ad-info-label">Internet</div>
                <div className="ad-info-value">Free Wi-Fi</div>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <section className="ad-section fade-up">
          <h2 className="apartment-details-heading">Features</h2>
          <div className="ad-features-grid">
            {apartment.features.map((feature) => (
              <div className="ad-feature-card" key={feature}>
                <span className="ad-feature-check" aria-hidden="true">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="ad-section fade-up">
          <h2 className="apartment-details-heading">Amenities</h2>
          <div className="ad-amenities-grid">
            {apartment.amenities.map((amenity) => (
              <div className="ad-amenity-item" key={amenity}>
                <span className="ad-amenity-check" aria-hidden="true">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Location distances */}
        <section className="ad-section fade-up">
          <h2 className="apartment-details-heading">
            Location &amp; distances
          </h2>
          <div className="apartment-details-location-grid">
            {locationDistances.map((item) => (
              <div
                className="apartment-details-location-card"
                key={item.label}
              >
                <span className="apartment-details-location-label">
                  {item.label}
                </span>
                <span className="apartment-details-location-value">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Availability */}
        <section className="ad-section fade-up">
          <h2 className="apartment-details-heading">Availability</h2>
          <AvailabilityCalendar apartmentId={apartment.id} />
        </section>

        {/* Map */}
        <section className="ad-section fade-up">
          <h2 className="apartment-details-heading">Location</h2>
          <iframe
            className="ad-map-frame"
            title="Apartments Ledić location in Krvavica"
            src="https://maps.google.com/maps?q=Krvavica,+Croatia&t=&z=14&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* CTA */}
        <div className="ad-cta fade-up">
          <h2 className="ad-cta-title">Ready for your stay?</h2>
          <p className="ad-cta-text">
            Book your apartment directly via WhatsApp and receive the fastest
            response.
          </p>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg apartment-details-whatsapp-button"
          >
            WhatsApp Inquiry
          </a>
        </div>

      </div>

      <ApartmentLightbox
        isOpen={isLightboxOpen}
        image={selectedImage}
        imageAlt={lightboxAlt}
        currentIndex={currentIndex}
        totalImages={apartment.gallery.length}
        onClose={() => setIsLightboxOpen(false)}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
}

export default ApartmentDetails;
