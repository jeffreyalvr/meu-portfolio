import React from "react";

import "./styles.css";

const Footer = ({ lang, book }) => {
  return (
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
  );
};

export default Footer;
