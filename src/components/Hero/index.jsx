import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import img_linkedin from "../../assets/images/linkedin.png";
import img_github from "../../assets/images/github.png";

import Button from "../Button";

const Hero = ({ children, linkedin_url, github_url }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="hero">
      {children}
      <div className="container move-up">
        <h1>
          {lang === "pt-br" ? book.pt_br.hero.hero_h1 : book.en_ca.hero.hero_h1}
          <span>{"{ Jeffrey }"}</span>
        </h1>

        <div className="label-block">
          <h2>react js developer</h2>
          <div className="carrot" />
        </div>

        <div className="action-buttons">
          <Button text="LinkedIn" icon={img_linkedin} url={linkedin_url} />
          <Button text="GitHub" icon={img_github} url={github_url} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
