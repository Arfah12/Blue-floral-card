import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import coupleWallpaper from "../../assets/images/vintage/lace.png";
import brideImage from "../../assets/images/vintage/bride.jpg";
import groomImage from "../../assets/images/vintage/groom.jpg";

import "./Couple.css";

function Couple() {
  return (
    <section className="couple-section">

      {/* =========================================
         BACKGROUND
      ========================================= */}

      <img
        src={coupleWallpaper}
        alt=""
        className="couple-wallpaper"
      />


      {/* =========================================
         SECTION TITLE
      ========================================= */}

  <div className="couple-section-title">
  The Couple
</div>

      {/* =========================================
         CONTENT
      ========================================= */}

      <div className="couple-inner">

        {/* =====================================
           ORNAMENT
        ===================================== */}

        <FadeIn animation="fade-scale">
          <div className="couple-ornament">
            ✦
          </div>
        </FadeIn>


        {/* =====================================
           COUPLE
        ===================================== */}

        <div className="couple-wrapper">

          {/* =====================================
             BRIDE
          ===================================== */}

          <FadeIn animation="fade-up" delay={0.4}>
            <div className="couple-person">

              <div className="couple-photo-wrapper">

                <img
                  src={brideImage}
                  alt={weddingData.couple.bride}
                  className="couple-photo"
                />

              </div>

              <p className="couple-role">
                The Bride
              </p>

              <h2 className="couple-name">
                {weddingData.couple.bride}
              </h2>

            </div>
          </FadeIn>


          {/* =====================================
             &
          ===================================== */}

          <FadeIn animation="fade" delay={0.7}>
            <div className="couple-and">
              &
            </div>
          </FadeIn>


          {/* =====================================
             GROOM
          ===================================== */}

          <FadeIn animation="fade-up" delay={0.9}>
            <div className="couple-person">

              <div className="couple-photo-wrapper">

                <img
                  src={groomImage}
                  alt={weddingData.couple.groom}
                  className="couple-photo"
                />

              </div>

              <p className="couple-role">
                The Groom
              </p>

              <h2 className="couple-name">
                {weddingData.couple.groom}
              </h2>

            </div>
          </FadeIn>

        </div>


        {/* =========================================
           DIVIDER
        ========================================= */}

        <FadeIn animation="fade-scale" delay={1.2}>
          <div className="couple-divider">

            <span></span>

            <i>✦</i>

            <span></span>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Couple;