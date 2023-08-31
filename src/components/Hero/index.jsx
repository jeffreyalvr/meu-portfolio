import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";

import Button from "../Button";

const Hero = ({ children }) => {
  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

  const { lang } = useContext(LanguageContext);

  return (
    <div className="hero">
      {children}
      <div className="container move-up">
        <h1>
          {lang === "pt-br"
            ? book.pt_br.hero.index.hero_h1
            : book.en_ca.hero.index.hero_h1}
          <span>{"{ Jeffrey }"}</span>
        </h1>
        <div className="label-block">
          <h2>react js developer</h2>
          <div className="carrot" />
        </div>
        <div className="row">
          <Button text="LinkedIn" icon={linkedin} url={linkedin_url} />
          <Button text="GitHub" icon={github} url={github_url} />
        </div>
      </div>
      <footer className="move-up">
        <div className="col">
          <span>
            {lang === "pt-br"
              ? book.pt_br.hero.index.hero_footer_span
              : book.en_ca.hero.index.hero_footer_span}
          </span>
          <span>&copy; 2023 - Jeffrey.</span>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
