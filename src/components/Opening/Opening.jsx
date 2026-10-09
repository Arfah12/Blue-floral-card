
import { useState } from "react";
import FadeIn from "../Animation/FadeIn";

import openingWallpaper from "../../assets/images/vintage/opening2.png";
import openButtonImage from "../../assets/images/vintage/openbutton.png";

import "./Opening.css";

function Opening({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <section
      className={`opening ${isOpening ? "opening-hide" : ""}`}
    >
      {/* =========================================
          WALLPAPER
      ========================================= */}

      <img
        src={openingWallpaper}
        alt=""
        className="opening-wallpaper"
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="opening-content">

        

        {/* OPEN BUTTON */}

        <FadeIn animation="fade-up" delay={0.8}>
          <button
            type="button"
            className="opening-button"
            onClick={handleOpen}
            disabled={isOpening}
            aria-label="Buka jemputan"
          >
            <img
              src={openButtonImage}
              alt=""
              className="opening-button-image"
            />
          </button>
        </FadeIn>

      </div>
    </section>
  );
}

export default Opening;