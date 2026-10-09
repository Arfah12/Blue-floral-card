
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
      setStatus("Please enter your name and wishes.");
      return;
    }

    if (guestName.length > 100 || guestMessage.length > 1000) {
      setStatusType("error");
      setStatus("Name or wishes exceed the allowed length.");
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
      setStatus("Thank you! Your wishes have been sent.");
    } catch (error) {
      console.error("Error saving wishes:", error);

      setStatusType("error");
      setStatus(
        "Unable to send your wishes. Please try again."
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
        Wishes
      </div>

      <div className="wishes-inner">
        <FadeIn animation="fade-scale">
          <div className="wishes-ornament">
            ✦
          </div>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="wishes-subtitle">
            Leave a little love for the happy couple
          </p>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.4}>
          <form
            className="wishes-form"
            onSubmit={handleSubmit}
          >
            <div className="wishes-field">
              <input
                type="text"
                placeholder="Your Name"
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
                placeholder="Your wishes..."
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
              {loading ? "Sending..." : "Send Wishes"}
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