//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Contact me</h2>
    </motion.div>
  );
};
