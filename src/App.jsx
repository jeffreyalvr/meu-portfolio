import { useEffect } from "react";

import Routes from "./routes";

import useThemeStore from "@store/useThemeStore";
import useLanguageStore from "./store/useLanguageStore";

import book from "@language/book.json";

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const html = document.documentElement;

    const applyTheme = () => {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const activeTheme = theme === "system" ? systemTheme : theme;

      html.setAttribute("data-theme", activeTheme);
    };

    applyTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") applyTheme;
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const titulo = language === "pt" ? book.pt.pages.title : book.en.pages.title;

  useEffect(() => {
    handlePageTitle();
  }, [language]);

  const handlePageTitle = () => {
    document.title = titulo;
  };

  return (
    <div className="App">
      <Routes />;
    </div>
  );
};

export default App;
