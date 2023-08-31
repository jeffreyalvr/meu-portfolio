import React, { useState } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

const Home = () => {
  const [lang, setLang] = useState("pt-br"); /* INFO: pt-br || en-ca */

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Hero>
        <Nav />
      </Hero>
      <Wrapper>
        <Sections />
        <Footer />
      </Wrapper>
    </LanguageContext.Provider>
  );
};

export default Home;
