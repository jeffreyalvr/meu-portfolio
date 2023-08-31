import React, { useState } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

const Home = () => {
  const [lang, setLang] = useState("pt-br"); /* INFO: pt-br || en-ca */

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Hero linkedin_url={linkedin_url} github_url={github_url}>
        <Nav />
      </Hero>
      <Wrapper>
        <Sections linkedin_url={linkedin_url} />
        <Footer />
      </Wrapper>
    </LanguageContext.Provider>
  );
};

export default Home;
