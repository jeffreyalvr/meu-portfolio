import "./styles.css";

import reactjs from "../../assets/images/reactjs.png";
import arrow_down from "../../assets/images/arrow_down.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Olá, sou o <span>Jeffrey</span>
      </h1>
      <h2>
        <div className="stack-badge">
          <img src={reactjs} alt="React JS" />
        </div>
        react js
      </h2>
      <button className="jumper">
        <img src={arrow_down} alt="Descer a página" />
      </button>
    </div>
  );
};

export default Hero;
