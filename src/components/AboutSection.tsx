import { About, Description, Hide, Image } from "../styles";
export const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work hard to make</h2>
          </Hide>
          <Hide>
            <h2>
              my <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact me if you want to make amazing website, I use React Js
          TypeScript Sass Webpack Node MongoDb
        </p>
        <button>Contact Us</button>
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

//Styled Components
