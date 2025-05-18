import { useNavigate } from "react-router-dom";

import book from "@language/book.json";

import "./styles.css";

import down_arrow_icon from "@assets/images/arrow.png";
import language_icon from "@assets/images/language.png";

import ThemeToggler from "@components/ThemeToggler";

import useLanguageStore from "@/store/useLanguageStore";

const Nav = ({ activeSection, linkItems, scrollToSection }) => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  let navigate = useNavigate();

  const handlePageChange = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="links">
          {linkItems.map((item) => (
            <div
              className={`item ${
                activeSection === item.sectionId ? "active" : undefined
              }`}
              onClick={
                item.useLink === true
                  ? () => handlePageChange(item.link)
                  : () => scrollToSection(item.sectionRef, item.sectionId)
              }
              key={item.sectionId}
            >
              {language === "pt" ? item.page.pt : item.page.en}
            </div>
          ))}
        </div>

        <div className="language-container">
          <div
            className="item"
            title={book.languages_pt_title}
            onClick={() => setLanguage("pt")}
          >
            <img src={language_icon} alt="A" />
            <span>{book.languages_pt}</span>
            <img
              className="arrow invert-img invert-img-180-deg"
              src={down_arrow_icon}
              alt="A"
            />
          </div>
          <div className="other-languages">
            <div
              className="item"
              title={book.languages_en_title}
              onClick={() => setLanguage("en")}
            >
              <span>{book.languages_en}</span>
            </div>
          </div>
        </div>

        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Nav;
