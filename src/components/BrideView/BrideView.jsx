import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase";
import openButtonImage from "../../assets/images/vintage/openbutton.png";

import "./BrideView.css";

const BRIDE_PIN = "Bride123";

function BrideView() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [rsvps, setRsvps] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    return onSnapshot(
      collection(db, "rsvps"),
      (snapshot) => {
        setRsvps(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
        setLoadError("");
      },
      (error) => {
        console.error("Error loading RSVP dashboard:", error);
        setLoadError(
          error.code === "permission-denied"
            ? "Firestore menolak bacaan RSVP. Kemaskini Firestore Rules untuk membenarkan bacaan."
            : "Unable to load RSVP data."
        );
      }
    );
  }, [isOpen]);

  const attending = rsvps.filter(
    (rsvp) => rsvp.attendance === "yes"
  );
  const notAttending = rsvps.filter(
    (rsvp) => rsvp.attendance === "no"
  );

  const attendingGuests = attending.reduce(
    (total, rsvp) => total + (Number(rsvp.guestCount) || 0),
    0
  );
  const notAttendingGuests = notAttending.reduce(
    (total, rsvp) => total + (Number(rsvp.guestCount) || 0),
    0
  );

  const handleUnlock = (event) => {
    event.preventDefault();

    if (pin !== BRIDE_PIN) {
      setPinError("PIN tidak betul.");
      return;
    }

    setPin("");
    setPinError("");
    setIsOpen(true);
  };

  const exportRsvps = () => {
    const rows = [
      ["Name", "Guest Count", "Attendance"],
      ...rsvps.map((rsvp) => [
        rsvp.name ?? "",
        rsvp.guestCount ?? "",
        rsvp.attendance === "yes" ? "Attending" : "Not attending",
      ]),
    ];
    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(",")
      )
      .join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "wedding-rsvp.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="bride-view" aria-label="Bride view">
      <button
        type="button"
        className="bride-view-trigger"
        onClick={() => {
          setPinError("");
          setIsOpen(false);
          setShowPin(true);
        }}
        aria-label="Buka Bride View"
      >
        <img src={openButtonImage} alt="" />
      </button>

      {!isOpen && showPin && (
        <form className="bride-view-pin" onSubmit={handleUnlock}>
          <label htmlFor="bride-pin">Masukkan PIN untuk buka dashboard</label>
          <div className="bride-view-pin-row">
            <input
              id="bride-pin"
              type="password"
              value={pin}
              onChange={(event) => setPin(event.target.value)}
              placeholder="PIN"
              autoComplete="off"
            />
            <button type="submit">Buka</button>
          </div>
          {pinError && <p role="alert">{pinError}</p>}
        </form>
      )}

      {isOpen && (
        <div className="bride-view-dashboard">
          <div className="bride-view-dashboard-heading">
            <h2>Guest Attendance</h2>
            <button type="button" onClick={exportRsvps} disabled={!rsvps.length}>
              Export CSV
            </button>
          </div>

          {loadError ? (
            <p role="alert">{loadError}</p>
          ) : (
            <div className="bride-view-stats">
              <div>
                <strong>{attendingGuests}</strong>
                <span>Coming</span>
                <small>{attending.length} RSVP</small>
              </div>
              <div>
                <strong>{notAttendingGuests}</strong>
                <span>Not coming</span>
                <small>{notAttending.length} RSVP</small>
              </div>
              <div>
                <strong>{attendingGuests + notAttendingGuests}</strong>
                <span>Total guests</span>
                <small>{rsvps.length} RSVP</small>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default BrideView;
