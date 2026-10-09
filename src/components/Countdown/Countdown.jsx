import { useEffect, useState } from "react";

import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import countdownWallpaper from "../../assets/images/vintage/maroon.png";

import "./Countdown.css";

function Countdown() {
  const targetDate = new Date(
    weddingData.countdown.dateTime
  ).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">

      {/* =========================
          WALLPAPER
      ========================= */}

      <img
        src={countdownWallpaper}
        alt=""
        className="countdown-wallpaper"
      />


      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="countdown-section-title">
        Until The Day
      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="countdown-inner">

        {/* ORNAMENT */}

        <FadeIn animation="fade-scale">
          <div className="countdown-ornament">
            ✦
          </div>
        </FadeIn>


        {/* MAIN DAYS */}

        <FadeIn animation="fade-scale" delay={0.2}>
          <div className="countdown-main">

            <span className="countdown-days">
              {timeLeft.days}
            </span>

            <span className="countdown-days-label">
              Days
            </span>

          </div>
        </FadeIn>


        {/* DIVIDER */}

        <FadeIn animation="fade-scale" delay={0.4}>
          <div className="countdown-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>


        {/* TIME */}

        <FadeIn animation="fade-up" delay={0.6}>
          <div className="countdown-grid">

            <div className="countdown-item">
              <span className="countdown-number">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                Hours
              </span>
            </div>


            <div className="countdown-item">
              <span className="countdown-number">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                Minutes
              </span>
            </div>


            <div className="countdown-item">
              <span className="countdown-number">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                Seconds
              </span>
            </div>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Countdown;