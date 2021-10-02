import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teams from "../img/teamwork.svg";
import design from "../img/diaphragm.svg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
export const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={design} alt="" />
              <h3>Professional</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teams} alt="" />
              <h3>Team work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src="https://via.placeholder.com/500x750?text=photo" alt="me" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  .icon {
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
