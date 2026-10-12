
import BrideView from "../BrideView/BrideView";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <p className="site-footer-quote" lang="ar" dir="rtl">
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </p>

        <p className="site-footer-translation">
          “Dan Kami telah menciptakan kamu berpasang-pasangan.”
        </p>

        <p className="site-footer-verse">
          SURAH AN-NABA’ · 78:8
        </p>

        <div className="site-footer-divider"></div>

        <p className="site-footer-couple">
          Dengan penuh kasih, Aliya &amp; Izzat
        </p>

        <BrideView />

        <p className="site-footer-note">
          Terima kasih kerana menjadi sebahagian daripada hari bahagia kami.
        </p>
        <p
          className="site-footer-note site-footer-contact"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            width: "fit-content",
            maxWidth: "100%",
            margin: "1.25rem auto 0",
            padding: "0.8rem 1.4rem",
            border: "1px solid rgba(255, 255, 255, 0.32)",
            borderRadius: "0.5rem",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          Interested in our digital cards? Contact us on WhatsApp:{" "}
          <a
            href="https://wa.me/60132900573"
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
            style={{
              fontWeight: 700,
              textDecoration: "none",
              color: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.86c0 2.09.55 4.13 1.59 5.93L.12 24l6.35-1.67a11.85 11.85 0 0 0 5.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.43-8.42Zm-8.44 18.29h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.86 9.86 0 0 1-1.51-5.25C2.18 6.42 6.62 1.98 12.08 1.98c2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 0 1 2.9 6.99c0 5.46-4.44 9.91-9.88 9.91Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;