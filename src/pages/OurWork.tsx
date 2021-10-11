//Images
import work1 from "../img/narcos1.jpg";
import work2 from "../img/breakingbad1.jpg";
import work3 from "../img/prisonbreak1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animation
import { motion } from "framer-motion";
import {
  slider,
  sliderContainer,
  pageAnimation,
  photoAnimation,
  fade,
  lineAnim
} from "../Animation";
import { useScroll } from "../components/useScroll";
import { ScrollTop } from "../components/ScrollTop";

export const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Narcos</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/narcos">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={work1}
              alt="narcos movie"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element1}
        variants={fade}
        initial="hidden"
        animate={controls1}
      >
        <h2>Breaking Bad</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/breaking-bad">
          <img src={work2} alt="breaking bad movie" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        initial="hidden"
        animate={controls2}
      >
        <h2>Prison Break</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/prison-break">
          <img src={work3} alt="prison break" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const SliderContainer = styled.div``;
