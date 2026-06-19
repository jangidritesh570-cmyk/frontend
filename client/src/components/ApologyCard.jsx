import { useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";

function ApologyCard() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const correctPassword = "bhoomi123";

  const handleUnlock = () => {
    if (password === correctPassword) {
      setUnlocked(true);
      setError("");
    } else {
      setError("❌ Wrong password Bhoomi!");
    }
  };

  const sendResponse = async (action) => {
    try {
      setLoading(true);

      await API.post("/response", {
        action,
        message:
          action === "accepted"
            ? "Bhoomi accepted apology ❤️"
            : "Bhoomi rejected apology 😢",
      });

      alert(
        action === "accepted"
          ? "❤️ Message Sent: Accepted"
          : "😢 Message Sent: Not Accepted"
      );
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apology-wrapper">

      {/* 🔐 LOCK SCREEN */}
      {!unlocked && (
        <div className="lock-panel">
          <h2>🔐 Enter Password to Open Apology</h2>

          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleUnlock}>Unlock</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {/* 💌 APOLOGY CONTENT */}
      {unlocked && (
        <motion.div
          className="apology-card"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <h2>🥺 Sorry yrr behan maaf krde please 🥺</h2>

          <p>
            are yrr behan maine faltu hi uss din tujhe naraj kr diya sorry
          </p>

          <p>
            ab yrr aise kregi kya tu bhai se naraj hogi naah naah mujhse naraj mt ho
            chomu 😂
          </p>

          <p>
            maine pehli baar fullstack project banaya hai sirf tujhe manane ke liye 😭
          </p>

          <h4>your one & only chomu bhai ki trf se sorry</h4>

          {/* 🔥 BUTTONS (NOW INSIDE MESSAGE) */}
          <div className="button-group">
            <button
              className="accept-btn"
              disabled={loading}
              onClick={() => sendResponse("accepted")}
            >
              {loading ? "Sending..." : "💖 Sorry Accept"}
            </button>

            <button
              className="reject-btn"
              disabled={loading}
              onClick={() => sendResponse("rejected")}
            >
              😢 Abhi Nahi
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ApologyCard;