import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnimation } from "../Animation";
import home1 from "../img/home1.png";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
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
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. we
          have materials and professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="Photographer" />
      </Image>
      <Wave />
    </About>
  );
};
