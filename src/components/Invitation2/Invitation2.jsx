import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import invitation2Wallpaper from "../../assets/images/vintage/maroon.png";

import "./Invitation2.css";

function Invitation2() {
  const invitation = weddingData.invitation;

  return (
    <section className="invitation2-section">

      {/* =========================================
         BACKGROUND
      ========================================= */}

      <img
        src={invitation2Wallpaper}
        alt=""
        className="invitation2-wallpaper"
      />


      {/* =========================================
         CONTENT
      ========================================= */}

      <div className="invitation2-inner">

        {/* ARABIC BISMILLAH */}
        <FadeIn animation="fade-scale">
          <p className="invitation2-arabic">
            {invitation.arabic}
          </p>
        </FadeIn>


        {/* BISMILLAH */}
        <FadeIn animation="fade" delay={0.7}>
          <p className="invitation2-bismillah">
            {invitation.bismillah}
          </p>
        </FadeIn>


        {/* GREETING */}
        <FadeIn animation="fade-up" delay={1.8}>
          <p className="invitation2-greeting">
            {invitation.greeting}
          </p>
        </FadeIn>


        {/* ORNAMENT */}
        <FadeIn animation="fade-scale" delay={2.9}>
          <div className="invitation2-ornament">
            ✦
          </div>
        </FadeIn>


        {/* PARENTS */}
        <FadeIn animation="fade-scale" delay={4}>
          <div className="invitation2-parents">

            <span>
              {invitation.parents.father}
            </span>

            <span className="invitation2-parent-and">
              &
            </span>

            <span>
              {invitation.parents.mother}
            </span>

          </div>
        </FadeIn>


        {/* INVITATION MESSAGE */}
        <FadeIn animation="fade-up" delay={5.1}>
          <p className="invitation2-message">
            {invitation.invitationMessage}
          </p>
        </FadeIn>


        {/* GUESTS */}
        <FadeIn animation="fade-up" delay={6.2}>
          <p className="invitation2-guests">
            {invitation.guests}
          </p>
        </FadeIn>


        {/* FAMILY MESSAGE */}
        <FadeIn animation="fade-up" delay={7.3}>
          <p className="invitation2-family-message">
            {invitation.familyMessage}
          </p>
        </FadeIn>


        {/* COUPLE FULL NAMES */}
        <FadeIn animation="fade-scale" delay={8.4}>
          <div className="invitation2-couple">

            <span className="invitation2-name">
              {weddingData.couplefullname.bride}
            </span>

            <span className="invitation2-and">
              &
            </span>

            <span className="invitation2-name">
              {weddingData.couplefullname.groom}
            </span>

          </div>
        </FadeIn>


        {/* CLOSING */}
        <FadeIn animation="fade-up" delay={9.5}>
          <p className="invitation2-closing">
            {invitation.closing}
          </p>
        </FadeIn>


        {/* DIVIDER */}
        <FadeIn animation="fade-scale" delay={10.6}>
          <div className="invitation2-divider">

            <span></span>

            <i>✦</i>

            <span></span>

          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Invitation2;