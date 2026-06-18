import { useState } from "react";
import { motion } from "framer-motion";

import FloatingHearts from "../components/FloatingHearts";
import ApologyCard from "../components/ApologyCard";
import ResponseButtons from "../components/ResponseButtons";
import ConfettiEffect from "../components/ConfettiEffect";

function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="home-page">
      <FloatingHearts />

      {accepted && <ConfettiEffect />}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ApologyCard />
      </motion.div>

      <ResponseButtons
        accepted={accepted}
        setAccepted={setAccepted}
      />
    </div>
  );
}

export default Home;