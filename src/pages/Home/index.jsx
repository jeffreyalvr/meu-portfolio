import React, { useState } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";

const Home = () => {
  const [lang, setLang] = useState("pt-br"); /* INFO: pt-br || en-ca */

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Hero>
        <Nav />
      </Hero>
    </LanguageContext.Provider>
  );
};

export default Home;
