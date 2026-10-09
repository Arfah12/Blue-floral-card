import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import weddingData from "../../data/weddingData";
import { db } from "../../firebase";
import FadeIn from "../Animation/FadeIn";

import displayWishesWallpaper from "../../assets/images/vintage/maroon.png";
import openButtonImage from "../../assets/images/vintage/openbutton.png";

import "./DisplayWishes.css";

function DisplayWishes() {
  const wishes = weddingData.wishes;
  const [guestWishes, setGuestWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!wishes?.enabled) {
      return undefined;
    }

    return onSnapshot(
      collection(db, "wishes"),
      (snapshot) => {
        const wishesData = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        wishesData.sort((firstWish, secondWish) => {
          const firstTime = firstWish.createdAt?.toMillis?.() ?? 0;
          const secondTime = secondWish.createdAt?.toMillis?.() ?? 0;

          return secondTime - firstTime;
        });

        setGuestWishes(
          wishesData.filter(
            (wish) =>
              typeof wish.name === "string" &&
              wish.name.trim() &&
              typeof wish.message === "string" &&
              wish.message.trim()
          )
        );
        setLoading(false);
        setLoadError(false);
      },
      (error) => {
        console.error("Error loading wishes:", error);
        setLoadError(true);
        setLoading(false);
      }
    );
  }, [wishes?.enabled]);

  if (!wishes?.enabled) {
    return null;
  }

  return (
    <section className="display-wishes-section">
      <img
        src={displayWishesWallpaper}
        alt=""
        className="display-wishes-wallpaper"
      />

      <h2 className="display-wishes-section-title">Guest Wishes</h2>

      <div className="display-wishes-inner">
        <FadeIn animation="fade-scale">
          <div className="display-wishes-ornament">✦</div>
        </FadeIn>

        <FadeIn animation="fade-up" delay={0.2}>
          <p className="display-wishes-subtitle">
            With love from our family and friends
          </p>
        </FadeIn>

        <div className="display-wishes-list">
          {loading && <p className="wish-message">Loading wishes...</p>}

          {!loading && loadError && (
            <p className="wish-message">
              Unable to load wishes. Please try again later.
            </p>
          )}

          {!loading && !loadError && guestWishes.length === 0 && (
            <p className="wish-message">
              Be the first to leave your wishes!
            </p>
          )}

          {!loading && !loadError && guestWishes.length > 0 && (
            <div className="wish-carousel" aria-label="Guest wishes">
              <div className="wish-track">
                {[...guestWishes, ...guestWishes].map((wish, index) => (
                  <div
                    className="wish-slide"
                    key={`${wish.id}-${index}`}
                    aria-hidden={index >= guestWishes.length}
                  >
                    <article className="wish-card">
                      <div className="wish-seal" aria-hidden="true">
                        <img src={openButtonImage} alt="" />
                      </div>

                      <div className="wish-mark" aria-hidden="true">
                        “
                      </div>

                      <p className="wish-message">{wish.message}</p>

                      <p className="wish-name">— {wish.name}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <FadeIn animation="fade-scale" delay={0.7}>
          <div className="display-wishes-divider" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default DisplayWishes;
