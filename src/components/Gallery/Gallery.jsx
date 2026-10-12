import { useEffect, useState } from "react";

import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import galleryWallpaper from "../../assets/images/vintage/maroon.png";

import "./Gallery.css";

function Gallery() {
  const gallery = weddingData.gallery;
  const images = gallery?.images?.filter(Boolean) ?? [];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (!gallery?.enabled || images.length === 0) {
    return null;
  }

  return (
    <section className="gallery-section">

      <img
        src={galleryWallpaper}
        alt=""
        className="gallery-wallpaper"
      />

      <div className="gallery-section-title">
        Our Moments
      </div>

      <div className="gallery-inner">

        

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="gallery-subtitle">
            A glimpse of our beautiful moments
          </p>
        </FadeIn>


        <FadeIn animation="fade-scale" delay={0.3} className="gallery-carousel">
          <div
            className="gallery-track"
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="gallery-slide" key={image}>
                <div className="gallery-item">
                  <img
                    src={image}
                    alt={`Wedding moment ${index + 1}`}
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="gallery-controls" aria-label="Gallery navigation">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`gallery-dot${activeImage === index ? " is-active" : ""}`}
              aria-label={`Show wedding moment ${index + 1}`}
              aria-pressed={activeImage === index}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>


        <FadeIn animation="fade-scale" delay={0.9}>
          <div className="gallery-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Gallery;