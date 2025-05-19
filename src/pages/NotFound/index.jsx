import { useNavigate } from "react-router-dom";

import book from "@language/book.json";

import Nav from "@components/Nav";
import { ActionButton } from "@components/Button";

import long_arrow_icon from "@assets/icons/long_arrow.png";

import useLanguageStore from "@/store/useLanguageStore";

const NotFound = () => {
  const language = useLanguageStore((state) => state.language);

  let navigate = useNavigate();

  const handleGoBack = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <>
      <Nav linkItems={[]} />
      <div className="not-found-container">
        <div className="header">
          <span className="error-code">404</span>
        </div>
        <div className="description">
          <h1>
            {language === "pt"
              ? book.pt.pages.not_found_h1
              : book.en.pages.not_found_h1}
          </h1>
          <span className="details">
            {language === "pt"
              ? book.pt.pages.not_found_span_1
              : book.en.pages.not_found_span_1}
          </span>
          <span className="details">
            {language === "pt"
              ? book.pt.pages.not_found_span_2
              : book.en.pages.not_found_span_2}
          </span>

          <div className="action-buttons">
            <ActionButton
              text={
                language === "pt"
                  ? book.pt.pages.not_found_button
                  : book.en.pages.not_found_button
              }
              overrideClass="invert-img-hover"
              icon={long_arrow_icon}
              func={handleGoBack}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
