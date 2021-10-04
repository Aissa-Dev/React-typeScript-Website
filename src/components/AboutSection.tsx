import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
export const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 0.5, transition: { duration: 1 } }
  };
  const titleContainer = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1, ease: "easeOut" } }
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
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
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
