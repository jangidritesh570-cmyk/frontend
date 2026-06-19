import { useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";
import MessagePopup from "./MessagePopup";

function ApologyCard() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const correctPassword = "bhoomi123";

  const handleUnlock = () => {
    if (password === correctPassword) {
      setUnlocked(true);
      setError("");
    } else {
      setError("❌ Wrong password Bhoomi!");
    }
  };

  const handleAccept = async () => {
    try {
      setLoading(true);

      await API.post("/response", {
        action: "accepted",
        message: "Bhoomi accepted apology ❤️",
      });

      // 🔥 OPEN POPUP AFTER SUCCESS
      setPopupMessage("❤️ Message Sent Successfully!");
      setPopupOpen(true);

    } catch (err) {
      setPopupMessage("❌ Failed to send message");
      setPopupOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    try {
      setLoading(true);

      await API.post("/response", {
        action: "rejected",
        message: "Bhoomi rejected apology 😢",
      });

      setPopupMessage("😢 Response Sent");
      setPopupOpen(true);

    } catch (err) {
      setPopupMessage("❌ Failed to send message");
      setPopupOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apology-wrapper">

      {/* 🔐 LOCK */}
      {!unlocked && (
        <div className="lock-panel">
          <h2>🔐 Enter Password</h2>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleUnlock}>Unlock</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {/* 💌 CARD */}
      {unlocked && (
        <motion.div className="apology-card">
          <h2>🥺 Sorry yrr behan maaf krde please 🥺</h2>

          <p>...your messages...</p>

          <h4>your one & only chomu bhai ❤️</h4>

          {/* 🔥 ONLY ONE BUTTON GROUP (INSIDE CARD) */}
          <div className="btn-container">
            <button
              className="accept-btn"
              disabled={loading}
              onClick={handleAccept}
            >
              💖 Sorry Accept
            </button>

            <button
              className="reject-btn"
              disabled={loading}
              onClick={handleReject}
            >
              😢 Abhi Nahi
            </button>
          </div>
        </motion.div>
      )}

      {/* 📩 POPUP */}
      {popupOpen && (
        <MessagePopup
          message={popupMessage}
          onClose={() => setPopupOpen(false)}
        />
      )}

    </div>
  );
}

export default ApologyCard;