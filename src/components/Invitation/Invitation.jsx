import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import heroWallpaper from "../../assets/images/vintage/hero-mobile.png";

import "./Invitation.css";

function Invitation() {
  return (
    <section className="invitation-section">

      {/* =========================================
          WALLPAPER
      ========================================= */}

      <img
        className="invitation-wallpaper"
        src={heroWallpaper}
        alt=""
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="invitation-inner">

        <FadeIn animation="fade-scale">
          <div className="invitation-ornament">
            ✦
          </div>
        </FadeIn>


        <FadeIn animation="fade" delay={0.3}>
          <p className="invitation-small-title">
            {weddingData.invitation.title}
          </p>
          <br />
        </FadeIn>


        <FadeIn animation="fade-up" delay={0.5}>
          <h2 className="invitation-heading">

            <span className="invitation-name">
              {weddingData.couple.bride}
            </span>

            <span className="invitation-and">
              &
            </span>

            <span className="invitation-name">
              {weddingData.couple.groom}
            </span>

          </h2>
        </FadeIn>


        <FadeIn animation="fade-up" delay={0.8}>
          <div className="invitation-divider">

            <span></span>

            <i>✦</i>

            <span></span>

          </div>
        </FadeIn>

<br />
        <FadeIn animation="fade-up" delay={1}>
          <p className="invitation-message">
            {weddingData.invitation.message}
          </p>
        </FadeIn>

      </div>

    </section>
  );
}

export default Invitation;