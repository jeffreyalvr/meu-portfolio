import "./styles.css";

import book from "@language/book.json";

import useLanguageStore from "@/store/useLanguageStore";

import down_arrow_icon from "@assets/icons/arrow.png";
import language_icon from "@assets/icons/language.png";

import LanguageItem from "./LanguageItem";

const LanguageContainer = () => {
  const language = useLanguageStore((state) => state.language);

  const isPortugues = language === "pt";
  const activeLanguage = isPortugues ? "pt" : "en";
  const otherLanguage = isPortugues ? "en" : "pt";

  return (
    <div className="language-container">
      <div className="active-language">
        <img src={language_icon} alt="A" />

        <LanguageItem
          languageName={book[`languages_${activeLanguage}`]}
          appTitle={book[`languages_${activeLanguage}_title`]}
          targetLanguage={activeLanguage}
        />

        <img
          className="arrow invert-img invert-img-180-deg"
          src={down_arrow_icon}
          alt=">"
        />
      </div>
      <div className="other-languages">
        <LanguageItem
          languageName={book[`languages_${otherLanguage}`]}
          appTitle={book[`languages_${otherLanguage}_title`]}
          targetLanguage={otherLanguage}
        />
      </div>
    </div>
  );
};

export default LanguageContainer;
