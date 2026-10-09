
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
      </div>
    </footer>
  );
}

export default Footer;