import { useState } from "react";
import { motion } from "framer-motion";

function ApologyCard() {
  // const [password, setPassword] = useState("");
  // const [unlocked, setUnlocked] = useState(false);

  // const handleUnlock = () => {
  //   if (password === "bhoomi7899") {
  //     setUnlocked(true);
  //   } else {
  //     alert("Wrong Password 😜");
  //   }
  // };

  return (
    <motion.div
      className="apology-card"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      {/* Main Video */}
      <h2>SORRY</h2>

     <video
  controls
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "15px",
  }}
      >
        <source src="/videos/bhoomi.mp4" type="video/mp4" />
      </video>

      {/* Secret Section */}
      {/* <div style={{ marginTop: "30px" }}>
        <h3>bhoomi sabse pehle terko mera yeh prank kaisa lga ab pehle ya toh sorry accept kar ya reject kr phir merko message kr dena iska password bta dunga😂</h3>

        {!unlocked ? (
          <>
            <input
              type="password"
              placeholder="Enter Secret Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "10px",
                width: "70%",
              }}
            />

            <button
              onClick={handleUnlock}
              style={{
                marginLeft: "10px",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Unlock
            </button>
          </>
        ) : (
          <div style={{ marginTop: "20px" }}>
            <h4>🎉 Secret Video Unlocked 🎉</h4>

            <video
  controls
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "15px",
  }}
            >
              <source
                src="/videos/secret-bhoomi.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        )}
      </div> */}
    </motion.div>
  );
}

export default ApologyCard;