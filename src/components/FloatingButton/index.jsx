import "./styles.css";

import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import arrow_icon from "../../assets/images/arrow.png";

const FloatingButton = ({ scrollToSection }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <button className="floating-button" onClick={() => scrollToSection(0)}>
      <img className="invert-img-face-up" src={arrow_icon} />
      {lang === "pt-br"
        ? book.pt_br.pages.floating_button_text
        : book.en_ca.pages.floating_button_text}
    </button>
  );
};

export default FloatingButton;
