import { useNavigate } from "react-router-dom";

import book from "@language/book.json";

import "./styles.css";

import { ActionButton } from "@components/Button";

import thumb_img from "@assets/images/thumb.png";
import view_all_icon from "@assets/icons/view_all.png";
import open_icon from "@assets/icons/open.png";

import useLanguageStore from "@/store/useLanguageStore";

const Works = () => {
  const language = useLanguageStore((state) => state.language);

  const handleWorksPage = () => {
    let path = "/works";
    navigate(path);
  };

  let navigate = useNavigate();

  const handleViewProject = () => {
    let path = "/works/1";
    navigate(path);
  };

  return (
    <div className="works">
      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20 hidden"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Github Repo Browser</h3>
        </div>
        <img className="banner" src={thumb_img} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20 hidden"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Buscador Imagens</h3>
        </div>
        <img className="banner" src={thumb_img} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20 hidden"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Weather App</h3>
        </div>
        <img className="banner" src={thumb_img} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20 hidden"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Todo List Simples</h3>
        </div>
        <img className="banner" src={thumb_img} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20 hidden"
            text={
              language === "pt"
                ? book.pt.sections.sec_works_project_button
                : book.en.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Minha Lista de Compras</h3>
        </div>
        <img className="banner" src={thumb_img} />
      </div>

      <div className="work-item">
        <ActionButton
          overrideClass="invert-img-hover my-20"
          text={
            language === "pt"
              ? book.pt.sections.sec_works_all_projects_button
              : book.en.sections.sec_works_all_projects_button
          }
          icon={view_all_icon}
          func={handleWorksPage}
        />
      </div>
    </div>
  );
};

export default Works;
