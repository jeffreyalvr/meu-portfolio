import { useContext, useEffect } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import { useNavigate } from "react-router-dom";

import "./styles.css";

import book from "../../language/book.json";

import brazil_flag from "../../assets/images/brazil_flag.png";
import canada_flag from "../../assets/images/canada_flag.png";

const Nav = ({ activeSection, linkItems, scrollToSection }) => {
  const { lang, setLang } = useContext(LanguageContext);

  const titulo =
    lang === "pt-br" ? book.pt_br.pages.title : book.en_ca.pages.title;

  useEffect(() => {
    handlePageTitle();
  }, [lang]);

  const handlePageTitle = () => {
    document.title = titulo;
  };

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

        <div className="languages">
          <div
            className="item"
            title="Alterar para o Português"
            onClick={() => setLang("pt-br")}
          >
            <img src={brazil_flag} alt="PT-BR" />
          </div>
          <div
            className="item"
            title="Switch to English"
            onClick={() => setLang("en-ca")}
          >
            <img src={canada_flag} alt="EN-CA" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
