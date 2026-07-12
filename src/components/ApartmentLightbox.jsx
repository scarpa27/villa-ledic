import { useEffect } from "react";

function ApartmentLightbox({
  isOpen,
  image,
  imageAlt,
  currentIndex,
  totalImages,
  onClose,
  onPrevious,
  onNext,
}) {
  // Keyboard: Escape closes, arrow keys navigate.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Lock body scroll while open; restore on close and on unmount.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen gallery"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {/* stopPropagation prevents clicking the image from closing the lightbox */}
      <div
        className="lightbox-inner"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={imageAlt}
          className="lightbox-image"
          decoding="async"
        />
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-nav-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-nav-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        &#8250;
      </button>

      <span
        className="lightbox-counter"
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex + 1} / {totalImages}
      </span>
    </div>
  );
}

export default ApartmentLightbox;
