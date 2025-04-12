import { useEffect, useState } from 'react';
import './Gallery.css';

const images = Object.values(import.meta.glob('../assets/*.webp', { eager: true, as: 'url' }));

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={prev} aria-label="Previous">
        ‹
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slideshow image ${currentIndex + 1}`}
        className="slider-image"
      />

      <button className="nav-button" onClick={next} aria-label="Next">
        ›
      </button>
    </div>
  );
}

export default Gallery;
