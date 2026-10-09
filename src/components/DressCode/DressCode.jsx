import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import dressCodeWallpaper from "../../assets/images/vintage/maroon.png";
import dress1 from "../../assets/images/vintage/dress1.jpg";
import dress2 from "../../assets/images/vintage/dress2.jpg";

import "./DressCode.css";

function DressCode() {
  const dressCode = weddingData.dressCode;

  if (!dressCode?.enabled) {
    return null;
  }

  return (
    <section className="dress-code-section">

      {/* =========================
          WALLPAPER
      ========================= */}

      <img
        src={dressCodeWallpaper}
        alt=""
        className="dress-code-wallpaper"
      />


      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="dress-code-section-title">
        Dress Code
      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="dress-code-inner">

        {/* ORNAMENT */}

        <FadeIn animation="fade-scale">
          <div className="dress-code-ornament">
            ✦
          </div>
        </FadeIn>


        {/* COLOUR */}

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="dress-code-colour">
            {dressCode.colour}
          </p>
        </FadeIn>


        {/* DESCRIPTION */}

        <FadeIn animation="fade-up" delay={0.4}>
          <p className="dress-code-description">
            {dressCode.description}
          </p>
        </FadeIn>


        {/* OUTFIT IMAGES */}

        <div className="dress-code-gallery">

          {/* BRIDE */}

          <FadeIn
            animation="fade-scale"
            delay={0.6}
          >
            <div className="dress-card">

              <div className="dress-image-wrapper">
                <img
                  src={dress1}
                  alt="Bride outfit"
                  className="dress-image"
                />
              </div>

              
            </div>
          </FadeIn>


          {/* GROOM */}

          <FadeIn
            animation="fade-scale"
            delay={0.8}
          >
            <div className="dress-card">

              <div className="dress-image-wrapper">
                <img
                  src={dress2}
                  alt="Groom outfit"
                  className="dress-image"
                />
              </div>

             

            </div>
          </FadeIn>

        </div>


        {/* DIVIDER */}

        <FadeIn
          animation="fade-scale"
          delay={1}
        >
          <div className="dress-code-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default DressCode;