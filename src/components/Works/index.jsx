import { useNavigate } from "react-router-dom";

import book from "@language/book.json";

import "./styles.css";

import { ActionButton } from "@components/Button";

import view_all_icon from "@assets/icons/view_all.png";
import open_icon from "@assets/icons/open.png";

import useLanguageStore from "@/store/useLanguageStore";

const Works = () => {
  const language = useLanguageStore((state) => state.language);

  let navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="works">
      <div className="work-item">
        <div className="hover-overlay">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={() => handleNavigate("/works/7")}
          />
        </div>
        <h3>Japanese Trainer</h3>
      </div>

      <div className="work-item">
        <div className="hover-overlay">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={() => handleNavigate("/works/6")}
          />
        </div>
        <h3>Math::Hub</h3>
      </div>

      <div className="work-item">
        <div className="hover-overlay">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={() => handleNavigate("/works/1")}
          />
        </div>
        <h3>Github Repo Browser</h3>
      </div>

      <div className="work-item">
        <div className="hover-overlay">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={() => handleNavigate("/works/2")}
          />
        </div>
        <h3>Buscador Imagens</h3>
      </div>

      <div className="work-item">
        <div className="hover-overlay">
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={() => handleNavigate("/works/3")}
          />
        </div>
        <h3>Weather App</h3>
      </div>

      <div className="work-item">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActionButton
            overrideClass="invert-img-hover"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_all_projects_button
                : book.en.sections.sec_works_all_projects_button
            }
            icon={view_all_icon}
            func={() => handleNavigate("/works")}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
