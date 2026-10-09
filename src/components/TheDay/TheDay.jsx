import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import theDayWallpaper from "../../assets/images/vintage/maroon.png";

import "./TheDay.css";

function TheDay() {
  const event = weddingData.event;
  const location = weddingData.location;

  return (
    <section className="the-day-section">

      {/* =========================
          WALLPAPER
      ========================= */}

      <img
        src={theDayWallpaper}
        alt=""
        className="the-day-wallpaper"
      />


      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="the-day-section-title">
        Hari Bahagia
      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="the-day-inner">

        {/* ORNAMENT */}

        <FadeIn animation="fade-scale">
          <div className="the-day-ornament">
            ✦
          </div>
        </FadeIn>


        {/* DATE */}

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="the-day-date">
            {event.date}
          </p>
        </FadeIn>


        {/* DAY */}

        <FadeIn animation="fade-up" delay={0.35}>
          <p className="the-day-weekday">
            {event.day}
          </p>
        </FadeIn>


        {/* TIME */}

        <FadeIn animation="fade-up" delay={0.5}>
          <p className="the-day-time">
            {event.time}
          </p>
        </FadeIn>


        {/* VENUE */}

        <FadeIn animation="fade-scale" delay={0.7}>
          <div className="the-day-venue">

            <p className="the-day-venue-name">
              {event.venue}
            </p>

            <p className="the-day-address">
              {event.address}
            </p>

          </div>
        </FadeIn>


        {/* DIVIDER */}

        <FadeIn animation="fade-scale" delay={0.9}>
          <div className="the-day-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>


        {/* TENTATIVE */}

        <FadeIn animation="fade-up" delay={1.1}>
          <div className="the-day-tentative">

            <p className="the-day-tentative-title">
              Atur Cara Majlis
            </p>

            <div className="the-day-schedule">

              {event.tentative?.map((item, index) => (
                <div
                  className="the-day-schedule-item"
                  key={index}
                >
                  <span className="the-day-schedule-time">
                    {item.time}
                  </span>

                  <span className="the-day-schedule-activity">
                    {item.activity}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </FadeIn>


        {/* MAP BUTTON */}

        {location?.enabled && location?.mapsUrl && (
          <FadeIn animation="fade-scale" delay={1.4}>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="the-day-map-button"
            >
              Lihat Lokasi
            </a>
          </FadeIn>
        )}

      </div>

    </section>
  );
}

export default TheDay;