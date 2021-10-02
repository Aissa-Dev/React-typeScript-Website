import { About, Description, Hide, Image } from "../styles";
export const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
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
