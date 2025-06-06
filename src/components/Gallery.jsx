import { useEffect, useState } from 'react';
import './Gallery.css';

const images = Object.values(import.meta.glob('../assets/*.webp', { eager: true, as: 'url' }));

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="slider-container">
        <button className="nav-button" onClick={prev} aria-label="Previous">
          ‹
        </button>

        <img
          src={images[currentIndex]}
          alt={`Slideshow image ${currentIndex + 1}`}
          className="slider-image"
          onClick={openModal}
          style={{ cursor: 'zoom-in' }}
        />

        <button className="nav-button" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
            <img
              src={images[currentIndex]}
              alt={`Large view of image ${currentIndex + 1}`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
