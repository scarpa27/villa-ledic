function ApartmentGallery({
  images,
  apartmentName,
  selectedImage,
  currentIndex,
  onSelect,
  onNext,
  onPrevious,
  onOpenLightbox,
}) {
  return (
    <>
      <div className="apartment-details-image-wrapper">
        <img
          src={selectedImage}
          alt={apartmentName}
          className="apartment-details-image"
          style={{ cursor: "zoom-in" }}
          onClick={onOpenLightbox}
          decoding="async"
        />
        <button
          type="button"
          className="apartment-details-nav-button apartment-details-nav-button-prev"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="apartment-details-nav-button apartment-details-nav-button-next"
          onClick={onNext}
          aria-label="Next image"
        >
          &#8250;
        </button>
        <span className="apartment-details-image-counter">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <div className="apartment-details-thumbnails">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={
              image === selectedImage
                ? "apartment-details-thumbnail apartment-details-thumbnail-active"
                : "apartment-details-thumbnail"
            }
            onClick={() => onSelect(image)}
          >
            <img
              src={image}
              alt={`${apartmentName} thumbnail ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default ApartmentGallery;
