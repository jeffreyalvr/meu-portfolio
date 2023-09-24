import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import { ActionButton } from "../../components/Button";

import long_arrow_icon from "../../assets/images/long_arrow.png";

const NotFound = () => {
  const { lang } = useContext(LanguageContext);

  let navigate = useNavigate();

  const handleGoBack = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="not-found-container">
      <div className="header">
        <span className="error-code">404</span>
      </div>
      <div className="description">
        <h1>
          {lang === "pt-br"
            ? book.pt_br.pages.not_found_h1
            : book.en_ca.pages.not_found_h1}
        </h1>
        <span className="details">
          {lang === "pt-br"
            ? book.pt_br.pages.not_found_span_1
            : book.en_ca.pages.not_found_span_1}
        </span>
        <span className="details">
          {lang === "pt-br"
            ? book.pt_br.pages.not_found_span_2
            : book.en_ca.pages.not_found_span_2}
        </span>

        <div className="action-buttons">
          <ActionButton
            text={
              lang === "pt-br"
                ? book.pt_br.pages.not_found_button
                : book.en_ca.pages.not_found_button
            }
            overrideClass="invert-img-hover"
            icon={long_arrow_icon}
            func={handleGoBack}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
