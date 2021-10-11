import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Aissa Dev
        </Link>
      </h1>
      <ul>
        <li>
          <div>
            <Link to="/">1. About Us</Link>
            <Line
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "120%" : "0%" }}
              transition={{ duration: 0.75 }}
            />
          </div>
        </li>
        <li>
          <div>
            <Link to="/work">2. Our Work</Link>
            <Line
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "120%" : "0%" }}
              transition={{ duration: 0.75 }}
            />
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact">3. Contact Us</Link>
            <Line
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "120%" : "0%" }}
              transition={{ duration: 0.75 }}
            />
          </div>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background: #282828;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    div {
      position: relative;
    }
  }

  #logo {
    font-size: 1.8rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }

    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  top: 1rem;
  left: 0;
`;
