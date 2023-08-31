import React from "react";

import "./styles.css";

import { Title, SubTitle } from "../Text";

import Works from "../Works";
import Roadmap from "../Roadmap";

const Sections = () => {
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
        <Roadmap />
      </section>
    </main>
  );
};

export default Sections;
