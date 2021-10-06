import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
export const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }
  };
  const titleContainer = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 1 }
    }
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. we
          have materials and professionals with amazing skills.
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img
          src="https://via.placeholder.com/503x750?text=My photo"
          alt="my photo"
        />
      </Image>
    </About>
  );
};
