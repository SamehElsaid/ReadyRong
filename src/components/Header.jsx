import React, { useState } from "react";
import { motion } from "framer-motion";
import SliderOffers from "./SliderOffers/SliderOffers";

function Header() {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      whileInView={{ translateX: "0" }}
      transition={{
        type: "spring",
        duration: 2,
        bounce: 0.5,
        delay: fix ? 0 : 1,
      }}
      viewport={{ once: true, amount: 0 }}
      id="home"
      className="mt-[111px] || relative || overflow-hidden  || scrollEvent"
    >
      <SliderOffers />
    </motion.div>
  );
}

export default Header;
