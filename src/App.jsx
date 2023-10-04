import { useState, useEffect } from "react";

import { LanguageContext } from "./Contexts/LanguageContext";
import { ThemeContext } from "./Contexts/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import book from "./language/book.json";

import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkView from "./pages/WorkView";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  /* INFO: lang: ["pt-br", "en-ca"], theme: ["light", "dark"] */
  const [lang, setLang] = useState(localStorage.getItem("lang") || "pt-br");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    handleLocalStorage({ lang, theme });
  }, [lang, theme]);

  const handleLocalStorage = (params) => {
    localStorage.setItem("lang", params.lang);
    localStorage.setItem("theme", params.theme);
  };

  const titulo =
    lang === "pt-br" ? book.pt_br.pages.title : book.en_ca.pages.title;

  useEffect(() => {
    handlePageTitle();
  }, [lang]);

  useEffect(() => {
    handleThemeToggle();
  }, [theme]);

  const handlePageTitle = () => {
    document.title = titulo;
  };

  const handleThemeToggle = () => {
    return true;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<WorkView />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
