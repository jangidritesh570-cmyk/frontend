import { useState } from "react";
import API from "../services/api";

function MessagePopup({ onClose }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const saveMessage = async () => {
    try {
      if (!message.trim()) {
        alert("Please message likho ❤️");
        return;
      }

      setLoading(true);

      const res = await API.post("/respond", {
        action: "accepted",
        message,
      });

      if (res.data.success) {
        alert("Message sent to ritesh");

        setMessage("");

        if (onClose) {
          onClose();
        }
      }
    } catch (error) {
      console.log(error);
      alert("Message send failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="message-popup">
      <h2>💌 Bhoomi ka Message</h2>

      <textarea
        placeholder="Bhoomi tujhe bhi jo gaali deni hai woh yaha de😅"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
      />

      <button
        onClick={saveMessage}
        disabled={loading}
      >
        {loading
          ? "Sending..."
          : "❤️ Send Message"}
      </button>
    </div>
  );
}

export default MessagePopup;