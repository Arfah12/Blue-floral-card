
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";
import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import rsvpWallpaper from "../../assets/images/vintage/maroon.png";

import "./RSVP.css";

function RSVP() {
  const rsvp = weddingData.rsvp;

  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [attendance, setAttendance] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  if (!rsvp?.enabled) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const guestName = name.trim();
    const numberOfGuests = Number(guestCount);

    if (!guestName || !attendance || !guestCount) {
      setStatusType("error");
      setStatus("Sila lengkapkan semua ruangan.");
      return;
    }

    if (
      !Number.isInteger(numberOfGuests) ||
      numberOfGuests < 1 ||
      numberOfGuests > 20
    ) {
      setStatusType("error");
      setStatus("Bilangan tetamu mestilah antara 1 hingga 20 orang.");
      return;
    }

    if (guestName.length > 100) {
      setStatusType("error");
      setStatus("Nama anda tidak boleh melebihi 100 aksara.");
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      await addDoc(collection(db, "rsvps"), {
        name: guestName,
        guestCount: numberOfGuests,
        attendance: attendance,
        createdAt: serverTimestamp(),
      });

      setName("");
      setGuestCount("1");
      setAttendance("");

      setStatusType("success");
      setStatus("Terima kasih! Pengesahan kehadiran anda telah direkodkan.");
    } catch (error) {
      console.error("Error saving RSVP:", error);

      setStatusType("error");
      setStatus(
        "Pengesahan kehadiran tidak dapat dihantar. Sila cuba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rsvp-section">
      <img
        src={rsvpWallpaper}
        alt=""
        className="rsvp-wallpaper"
      />

      <div className="rsvp-section-title">
        RSVP
      </div>

      <div className="rsvp-inner">
        <FadeIn animation="fade-scale">
          <div className="rsvp-ornament">
            ✦
          </div>
        </FadeIn>

        <FadeIn
          animation="fade-up"
          delay={0.2}
          className="rsvp-subtitle-wrapper"
        >
          <p className="rsvp-subtitle">
            Sila sahkan kehadiran anda
          </p>
        </FadeIn>

        <br />

        <FadeIn animation="fade-up" delay={0.4}>
          <form
            className="rsvp-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              maxLength={100}
              required
              disabled={loading}
            />

            <input
              type="number"
              min="1"
              max="20"
              step="1"
              placeholder="Bilangan Tetamu"
              value={guestCount}
              onChange={(event) =>
                setGuestCount(event.target.value)
              }
              required
              disabled={loading}
            />

            <select
              value={attendance}
              onChange={(event) =>
                setAttendance(event.target.value)
              }
              required
              disabled={loading}
            >
              <option value="" disabled>
                Kehadiran
              </option>

              <option value="yes">
                Ya, saya akan hadir
              </option>

              <option value="no">
                Tidak dapat hadir
              </option>
            </select>

            <button
              type="submit"
              className="rsvp-button"
              disabled={loading}
            >
              {loading ? "Menghantar..." : "Sahkan Kehadiran"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`rsvp-status ${statusType}`}
              >
                {status}
              </p>
            )}
          </form>
        </FadeIn>

        <FadeIn animation="fade-scale" delay={0.7}>
          <div className="rsvp-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default RSVP;