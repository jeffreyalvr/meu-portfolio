import "./styles.css";

import { ActionButton } from "../Button";

import thumb from "../../assets/images/projects/thumb.png";
import view_all_icon from "../../assets/images/view_all.png";

const Works = () => {
  return (
    <div className="works">
      <div className="work-item">
        <h3>Projeto teste</h3>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <h3>Projeto teste</h3>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <h3>Projeto teste</h3>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <h3>Projeto teste</h3>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <h3>Projeto teste</h3>
        <img className="banner" src={thumb} />
      </div>

      <div className="work-item">
        <ActionButton
          overrideClass="invert-img-hover"
          text="Ver todos os projetos"
          icon={view_all_icon}
        />
      </div>
    </div>
  );
};

export default Works;
