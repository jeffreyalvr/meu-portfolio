import { useState, useEffect } from "react";

import { LanguageContext } from "./Contexts/LanguageContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkItem from "./pages/WorkItem";
import Contact from "./pages/Contact";
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
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<WorkItem />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
