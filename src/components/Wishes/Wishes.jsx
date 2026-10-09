
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";
import weddingData from "../../data/weddingData";
import FadeIn from "../Animation/FadeIn";

import wishesWallpaper from "../../assets/images/vintage/maroon.png";

import "./Wishes.css";

function Wishes() {
  const wishes = weddingData.wishes;

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  if (!wishes?.enabled) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const guestName = name.trim();
    const guestMessage = message.trim();

    if (!guestName || !guestMessage) {
      setStatusType("error");
      setStatus("Sila masukkan nama dan ucapan anda.");
      return;
    }

    if (guestName.length > 100 || guestMessage.length > 1000) {
      setStatusType("error");
      setStatus("Nama atau ucapan melebihi had yang dibenarkan.");
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      await addDoc(collection(db, "wishes"), {
        name: guestName,
        message: guestMessage,
        createdAt: serverTimestamp(),
      });

      setName("");
      setMessage("");
      setStatusType("success");
      setStatus("Terima kasih! Ucapan anda telah dihantar.");
    } catch (error) {
      console.error("Error saving wishes:", error);

      setStatusType("error");
      setStatus(
        "Ucapan tidak dapat dihantar. Sila cuba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="wishes-section">
      <img
        src={wishesWallpaper}
        alt=""
        className="wishes-wallpaper"
      />

      <div className="wishes-section-title">
        Ucapan
      </div>

      <div className="wishes-inner">
        <FadeIn animation="fade-scale">
          <div className="wishes-ornament">
            ✦
          </div>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="wishes-subtitle">
            Berikan ucapan dan doa restu anda kepada pasangan pengantin
          </p>
        </FadeIn>
<br />
        <FadeIn animation="fade-up" delay={0.4}>
          <form
            className="wishes-form"
            onSubmit={handleSubmit}
          >
            <div className="wishes-field">
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
            </div>

            <div className="wishes-field">
              <textarea
                rows={4}
                placeholder="Ucapan anda..."
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                maxLength={1000}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="wishes-button"
              disabled={loading}
            >
              {loading ? "Menghantar..." : "Hantar Ucapan"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`wishes-status ${statusType}`}
              >
                {status}
              </p>
            )}
          </form>
        </FadeIn>

        <FadeIn animation="fade-scale" delay={0.7}>
          <div className="wishes-divider">
            <span></span>
            <i>✦</i>
            <span></span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Wishes;