import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import dressCodeWallpaper from "../../assets/images/vintage/blue1.png";

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
        Kod Pemakaian
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


        {/* DESCRIPTION */}

        <FadeIn animation="fade-up" delay={0.4}>
          <div className="dress-code-copy">
            <p className="dress-code-greeting">
              {dressCode.greeting}
            </p>

            <p className="dress-code-poem">
              {dressCode.poem}
            </p>

            <p className="dress-code-guidance">
              {dressCode.women}
            </p>

            <p className="dress-code-guidance">
              {dressCode.men}
            </p>

            <p className="dress-code-closing">
              {dressCode.closing}
            </p>
          </div>
        </FadeIn>

        {/* DIVIDER */}

        <FadeIn
          animation="fade-scale"
          delay={0.8}
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