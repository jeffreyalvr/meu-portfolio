import React from "react";

import "./styles.css";

import { Title, SubTitle } from "../Text";

import img_linkedin from "../../assets/images/linkedin.png";
import img_profile from "../../assets/images/profile.jpeg";

import Button from "../Button";

import Works from "../Works";
import Roadmap from "../Roadmap";
import MinhaStack from "../MinhaStack";

const Sections = ({ linkedin_url }) => {
  return (
    <main>
      <section>
        <Title>Trabalhos</Title>
        <SubTitle>
          Abaixo você pode ver todos os projetos que demostram o que eu posso
          lhe oferecer com o meu conhecimento.
        </SubTitle>
        <Works />
      </section>

      <section>
        <Title>Sobre</Title>
        <SubTitle>Conheça toda a minha jornada até o momento atual.</SubTitle>
        <div className="bio">
          <img src={img_profile} title="Jeffrey" alt="Foto" />
          <div className="description">
            <div className="tag">
              <span className="title">Jeffrey, 27</span>
            </div>
            <div className="additional">
              <span>Brasileiro.</span>
              <span>Falante de Português, Inglês e Francês.</span>
              <span>Desenvolvedor WEB.</span>
            </div>
          </div>
          <div className="action-buttons">
            <Button text="LinkedIn" icon={img_linkedin} url={linkedin_url} />
          </div>
        </div>
        <Roadmap />
      </section>

      <section>
        <Title>Stack</Title>
        <SubTitle>
          Estas são todas as ferramentas das quais possuo experiência de uso.
        </SubTitle>
        <MinhaStack />
      </section>
    </main>
  );
};

export default Sections;
