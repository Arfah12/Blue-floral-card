import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import contactWallpaper from "../../assets/images/vintage/blue1.png";

import "./Contact.css";

function Contact() {
  const contact = weddingData.contact;

  if (!contact?.enabled) {
    return null;
  }

  const createWhatsAppLink = (phone) => {
    return `https://wa.me/${phone}`;
  };

  return (
    <section className="contact-section">

      <img
        src={contactWallpaper}
        alt=""
        className="contact-wallpaper"
      />

      <div className="contact-section-title">
        Hubungi Kami
      </div>

      <div className="contact-inner">

        <FadeIn animation="fade-scale">
          <div className="contact-ornament">
            ✦
          </div>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="contact-subtitle">
            Sebarang pertanyaan,
            <br />
            sila hubungi wakil kami.
          </p>
        </FadeIn>
<br />
        <div className="contact-list">

          {/* WAKIL 1 */}

          <FadeIn animation="fade-up" delay={0.4}>
            <div className="contact-card">

              <p className="contact-role">
                {contact.representative1.label}
              </p>

              <p className="contact-name">
                {contact.representative1.name}
              </p>

              <a
                href={createWhatsAppLink(
                  contact.representative1.phone
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                 WhatsApp
              </a>

            </div>
          </FadeIn>


          {/* WAKIL 2 */}

          <FadeIn animation="fade-up" delay={0.6}>
            <div className="contact-card">

              <p className="contact-role">
                {contact.representative2.label}
              </p>

              <p className="contact-name">
                {contact.representative2.name}
              </p>

              <a
                href={createWhatsAppLink(
                  contact.representative2.phone
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                WhatsApp
              </a>

            </div>
          </FadeIn>

        </div>

        <FadeIn animation="fade-scale" delay={0.8}>
          <div className="contact-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}

export default Contact;