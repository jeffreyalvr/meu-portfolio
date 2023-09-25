import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

const CompactHero = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="hero hero-compact">
      <div className="container move-up">
        <h1>
          <span>{"{ Jeffrey }"}</span>
        </h1>
      </div>
    </div>
  );
};

export default CompactHero;
