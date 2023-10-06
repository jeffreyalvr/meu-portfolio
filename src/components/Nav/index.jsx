import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

import { useNavigate } from "react-router-dom";

import book from "../../language/book.json";

import "./styles.css";

import down_arrow_icon from "../../assets/images/arrow.png";
import language_icon from "../../assets/images/language.png";
import sun_icon from "../../assets/images/sun.png";
import moon_icon from "../../assets/images/moon.png";

const Nav = ({ activeSection, linkItems, scrollToSection }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

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
              {lang === "pt-br" ? item.page.pt_br : item.page.en_ca}
            </div>
          ))}
        </div>

        <div className="language-container">
          <div
            className="item"
            title={book.languages_pt_br_title}
            onClick={() => setLang("pt-br")}
          >
            <img src={language_icon} alt="A" />
            <span>{book.languages_pt_br}</span>
            <img
              className="arrow invert-img invert-img-180-deg"
              src={down_arrow_icon}
              alt="A"
            />
          </div>
          <div className="other-languages">
            <div
              className="item"
              title={book.languages_en_ca_title}
              onClick={() => setLang("en-ca")}
            >
              <span>{book.languages_en_ca}</span>
            </div>
          </div>
        </div>

        <div className="theme-container">
          <div
            className={`item ${theme === "light" ? "theme-active" : ""}`}
            title={
              lang === "pt-br"
                ? book.pt_br.nav.nav_theme_item_light_title
                : book.en_ca.nav.nav_theme_item_light_title
            }
            onClick={() => setTheme("light")}
          >
            <img
              src={sun_icon}
              alt={
                lang === "pt-br"
                  ? book.pt_br.nav.nav_theme_item_light
                  : book.en_ca.nav.nav_theme_item_light
              }
            />
          </div>
          <div
            className={`item ${theme === "dark" ? "theme-active" : ""}`}
            title={
              lang === "pt-br"
                ? book.pt_br.nav.nav_theme_item_dark_title
                : book.en_ca.nav.nav_theme_item_dark_title
            }
            onClick={() => setTheme("dark")}
          >
            <img
              src={moon_icon}
              alt={
                lang === "pt-br"
                  ? book.pt_br.nav.nav_theme_item_dark
                  : book.en_ca.nav.nav_theme_item_dark
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
