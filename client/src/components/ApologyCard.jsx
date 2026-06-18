import { motion } from "framer-motion";

function ApologyCard() {
  return (
    <motion.div
      className="apology-card"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <h2>🥺 Sorry yrr behan maaf krde please 🥺</h2>

      <p>are yrr kal toh naraj kr diya maine tujhe😂</p>

      <p>ab yrr aise kregi kya tu bhai se naraj hogi naah naah mujhse naraj mt ho chomu ab trko manane ke liye maine pehli baar full stack project banaya maanja😂😂😂</p>

      <p>Please maaf kar de yrr sorry accept pr click kar aur mujhe jo gaali likhni hai woh likhkar bhejde mujhe lekin jyada gandi gaali mat likhna😂😂</p>

      <h4>your one & only chomu bhai ki trf se sorry</h4>
    </motion.div>
  );
}

export default ApologyCard;