import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import galleryWallpaper from "../../assets/images/vintage/maroon.png";

import "./Gallery.css";

function Gallery() {
  const gallery = weddingData.gallery;

  if (!gallery?.enabled) {
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


        <div className="gallery-layout">

          {/* IMAGE 1 — LARGE */}

          {gallery.images?.[0] && (
            <FadeIn
              animation="fade-scale"
              delay={0.3}
              className="gallery-photo gallery-photo-large"
            >
              <div className="gallery-item">
                <img
                  src={gallery.images[0]}
                  alt="Wedding moment 1"
                  className="gallery-image"
                />
              </div>
            </FadeIn>
          )}


          {/* IMAGE 2 — SMALL */}

          {gallery.images?.[1] && (
            <FadeIn
              animation="fade-scale"
              delay={0.45}
              className="gallery-photo gallery-photo-small"
            >
              <div className="gallery-item">
                <img
                  src={gallery.images[1]}
                  alt="Wedding moment 2"
                  className="gallery-image"
                />
              </div>
            </FadeIn>
          )}


          {/* IMAGE 3 — SMALL */}

          {gallery.images?.[2] && (
            <FadeIn
              animation="fade-scale"
              delay={0.6}
              className="gallery-photo gallery-photo-small"
            >
              <div className="gallery-item">
                <img
                  src={gallery.images[2]}
                  alt="Wedding moment 3"
                  className="gallery-image"
                />
              </div>
            </FadeIn>
          )}


          {/* IMAGE 4 — LARGE */}

          {gallery.images?.[3] && (
            <FadeIn
              animation="fade-scale"
              delay={0.75}
              className="gallery-photo gallery-photo-large"
            >
              <div className="gallery-item">
                <img
                  src={gallery.images[3]}
                  alt="Wedding moment 4"
                  className="gallery-image"
                />
              </div>
            </FadeIn>
          )}

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