import { useContext, useEffect } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import "./styles.css";

import book from "../../language/book.json";

import brazil_flag from "../../assets/images/brazil_flag.png";
import canada_flag from "../../assets/images/canada_flag.png";

const Nav = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const titulo =
    lang === "pt-br" ? book.pt_br.pages.title : book.en_ca.pages.title;

  useEffect(() => {
    handlePageTitle();
  }, [lang]);

  const handlePageTitle = () => {
    document.title = titulo;
  };

  return (
    <nav>
      <div className="links">
        <div className="item active">
          {lang === "pt-br"
            ? book.pt_br.nav.index.nav_item_homepage
            : book.en_ca.nav.index.nav_item_homepage}
        </div>
        <div className="item">
          {lang === "pt-br"
            ? book.pt_br.nav.index.nav_item_work
            : book.en_ca.nav.index.nav_item_work}
        </div>
        <div className="item">
          {lang === "pt-br"
            ? book.pt_br.nav.index.nav_item_stack
            : book.en_ca.nav.index.nav_item_stack}
        </div>
        <div className="item">
          {lang === "pt-br"
            ? book.pt_br.nav.index.nav_item_about
            : book.en_ca.nav.index.nav_item_about}
        </div>
        <div className="item">
          {lang === "pt-br"
            ? book.pt_br.nav.index.nav_item_contact
            : book.en_ca.nav.index.nav_item_contact}
        </div>
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
    </nav>
  );
};

export default Nav;
