import { useNavigate } from "react-router-dom";

import "./styles.css";

import LanguageContainer from "@components/LanguageContainer";
import ThemeToggler from "@components/ThemeToggler";

import useLanguageStore from "@/store/useLanguageStore";

const Nav = ({ activeSection, linkItems, scrollToSection }) => {
  const language = useLanguageStore((state) => state.language);

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

        <LanguageContainer />
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Nav;
