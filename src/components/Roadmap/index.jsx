import React from "react";

import "./styles.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="road-item">
        <div className="signal">o</div>
        <div className="signal-date">2015</div>
        <div className="signal-description">
          Início da graduação em Ciências da Computação
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal">o</div>
        <div className="signal-date">2018</div>
        <div className="signal-description">
          Estágio na Fábrica de Software - UNIPÊ
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal">o</div>
        <div className="signal-date">2020</div>
        <div className="signal-description">
          Início da pós-graduação em Desenvolvimento para Aplicações Web
        </div>
      </div>
      <div className="path now"></div>
      <div className="road-item">
        <div className="signal now">o</div>
        <div className="signal-date">2023</div>
        <div className="signal-description">Lançamento do site e portfólio</div>
      </div>
    </div>
  );
};

export default Roadmap;
