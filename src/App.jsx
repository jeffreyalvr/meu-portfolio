import { useState, useEffect } from "react";

import { LanguageContext } from "./Contexts/LanguageContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  /* INFO: pt-br || en-ca */
  const [lang, setLang] = useState(localStorage.getItem("lang") || "pt-br");

  useEffect(() => {
    handleLocalStorage(lang);
  }, [lang]);

  const handleLocalStorage = (language) => {
    localStorage.setItem("lang", language);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
