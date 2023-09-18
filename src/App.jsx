import { useState } from "react";

import { LanguageContext } from "./Contexts/LanguageContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const [lang, setLang] = useState("pt-br"); /* INFO: pt-br || en-ca */

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
