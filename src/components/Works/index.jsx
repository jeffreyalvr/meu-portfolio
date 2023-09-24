import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import { ActionButton } from "../Button";

import thumb from "../../assets/images/projects/thumb.png";
import view_all_icon from "../../assets/images/view_all.png";
import open_icon from "../../assets/images/open.png";

const Works = () => {
  const { lang } = useContext(LanguageContext);

  let navigate = useNavigate();

  const handleWorksPage = () => {
    let path = "/works";
    navigate(path);
  };

  const handleViewProject = () => {
    let path = "/works/1";
    navigate(path);
  };

  return (
    <div className="works">
      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20"
            text={
              lang === "pt-br"
                ? book.pt_br.sections.sec_works_project_button
                : book.en_ca.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Github Repo Browser</h3>
        </div>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20"
            text={
              lang === "pt-br"
                ? book.pt_br.sections.sec_works_project_button
                : book.en_ca.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Buscador Imagens</h3>
        </div>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20"
            text={
              lang === "pt-br"
                ? book.pt_br.sections.sec_works_project_button
                : book.en_ca.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Weather App</h3>
        </div>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20"
            text={
              lang === "pt-br"
                ? book.pt_br.sections.sec_works_project_button
                : book.en_ca.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Todo List Simples</h3>
        </div>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <div className="item-container">
          <ActionButton
            overrideClass="invert-img-hover my-20"
            text={
              lang === "pt-br"
                ? book.pt_br.sections.sec_works_project_button
                : book.en_ca.sections.sec_works_project_button
            }
            icon={open_icon}
            func={handleViewProject}
          />
          <h3>Minha Lista de Compras</h3>
        </div>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <ActionButton
          overrideClass="invert-img-hover my-20"
          text={
            lang === "pt-br"
              ? book.pt_br.sections.sec_works_all_projects_button
              : book.en_ca.sections.sec_works_all_projects_button
          }
          icon={view_all_icon}
          func={handleWorksPage}
        />
      </div>
    </div>
  );
};

export default Works;
