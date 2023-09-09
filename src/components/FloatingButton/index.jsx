import "./styles.css";

import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import go_up_icon from "../../assets/images/go-up.png";

const FloatingButton = ({ scrollToSection }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <button className="floating-button" onClick={() => scrollToSection(0)}>
      <img src={go_up_icon} />
      {lang === "pt-br"
        ? book.pt_br.pages.floating_button_text
        : book.en_ca.pages.floating_button_text}
    </button>
  );
};

export default FloatingButton;
