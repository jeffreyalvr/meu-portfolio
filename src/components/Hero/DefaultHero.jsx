import book from "@language/book.json";

import img_linkedin from "@assets/images/linkedin.png";
import img_github from "@assets/images/github.png";

import { LinkButton } from "@components/Button";

import useLanguageStore from "@/store/useLanguageStore";

const DefaultHero = ({ linkedin_url, github_url }) => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="hero">
      <div className="container move-up">
        <h1>
          {language === "pt" ? book.pt.hero.hero_h1 : book.en.hero.hero_h1}
          <span>{"{ Jeffrey }"}</span>
        </h1>

        <div className="label-block">
          <h2>react js developer</h2>
          <div className="carrot" />
        </div>

        <div className="action-buttons">
          <LinkButton text="LinkedIn" icon={img_linkedin} url={linkedin_url} />
          <LinkButton text="GitHub" icon={img_github} url={github_url} />
        </div>
      </div>
    </div>
  );
};

export default DefaultHero;
