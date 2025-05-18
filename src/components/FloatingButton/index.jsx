import "./styles.css";

import book from "@language/book.json";

import arrow_icon from "@assets/images/arrow.png";

import useLanguageStore from "@/store/useLanguageStore";

const FloatingButton = ({ scrollToSection }) => {
  const language = useLanguageStore((state) => state.language);

  return (
    <button className="floating-button" onClick={() => scrollToSection(0)}>
      <img className="invert-img-face-up" src={arrow_icon} />
      {language === "pt"
        ? book.pt.pages.floating_button_text
        : book.en.pages.floating_button_text}
    </button>
  );
};

export default FloatingButton;
