import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import heroWallpaper from "../../assets/images/vintage/maroon.png";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <img
        className="hero-wallpaper"
        src={heroWallpaper}
        alt=""
      />

      <div className="hero-inner">

        <FadeIn animation="fade-scale">
          <div className="hero-ornament">
            ✦
          </div>
        </FadeIn>

        <FadeIn animation="fade" delay={0.3}>
          <p className="hero-small-title">
            {weddingData.invitation.title}
          </p>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.6}>
          <div className="hero-names">

            <span className="hero-bride">
              {weddingData.couple.bride}
            </span>

            <span className="hero-and">
              &
            </span>

            <span className="hero-groom">
              {weddingData.couple.groom}
            </span>

          </div>
        </FadeIn>

        <FadeIn animation="fade-scale" delay={1}>
          <div className="hero-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>

        <FadeIn animation="fade-up" delay={1.2}>
          <p className="hero-date">
            {weddingData.event.date}
          </p>
        </FadeIn>

        <FadeIn animation="fade-up" delay={1.4}>
          <p className="hero-time">
            {weddingData.event.day}
            <span> • </span>
            {weddingData.event.time}
          </p>
        </FadeIn>

        <FadeIn animation="fade-blur" delay={1.7}>
          <p className="hero-message">
            {weddingData.invitation.message}
          </p>
        </FadeIn>

      </div>

    </section>
  );
}

export default Hero;