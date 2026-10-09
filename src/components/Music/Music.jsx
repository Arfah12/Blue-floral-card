import { useEffect, useRef, useState } from "react";
import weddingData from "../../data/weddingData";
import weddingMusic from "../../assets/music/wedding.mp3";
import "./Music.css";

function Music({ playMusic }) {
  const music = weddingData.music;

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!music?.enabled) return;

    const audio = audioRef.current;
    let isCancelled = false;

    if (!audio) return;

    audio.loop = true;

    if (playMusic && audio.paused) {
      audio
        .play()
        .then(() => {
          if (!isCancelled) {
            setIsPlaying(true);
          }
        })
        .catch((error) => {
          if (error.name !== "AbortError" && !isCancelled) {
            console.error("Music gagal dimainkan:", error);
            setIsPlaying(false);
          }
        });
    }

    return () => {
      isCancelled = true;
      audio.pause();
    };
  }, [music?.enabled, playMusic]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Music gagal dimainkan:", error);
      setIsPlaying(false);
    }
  };

  if (!music?.enabled) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        preload="auto"
        loop
      />

      <button
        type="button"
        className={`music-button ${
          isPlaying ? "is-playing" : ""
        }`}
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Pause music"
            : "Play music"
        }
      >
        <span className="music-icon">
          {isPlaying ? "Ⅱ" : "♪"}
        </span>
      </button>
    </>
  );
}

export default Music;