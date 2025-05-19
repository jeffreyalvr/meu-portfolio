import book from "@language/book.json";

import useThemeStore from "@/store/useThemeStore";
import useLanguageStore from "@/store/useLanguageStore";

import sun_icon from "@assets/icons/sun.png";
import moon_icon from "@assets/icons/moon.png";

import "./styles.css";

const ThemeToggler = () => {
  const language = useLanguageStore((state) => state.language);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className="theme-container">
      <div
        className={`item ${theme === "light" ? "theme-active" : ""}`}
        title={
          language === "pt"
            ? book.pt.nav.nav_theme_item_light_title
            : book.en.nav.nav_theme_item_light_title
        }
        onClick={() => setTheme("light")}
      >
        <img
          src={sun_icon}
          alt={
            language === "pt"
              ? book.pt.nav.nav_theme_item_light
              : book.en.nav.nav_theme_item_light
          }
        />
      </div>
      <div
        className={`item ${theme === "dark" ? "theme-active" : ""}`}
        title={
          language === "pt"
            ? book.pt.nav.nav_theme_item_dark_title
            : book.en.nav.nav_theme_item_dark_title
        }
        onClick={() => setTheme("dark")}
      >
        <img
          src={moon_icon}
          alt={
            language === "pt"
              ? book.pt.nav.nav_theme_item_dark
              : book.en.nav.nav_theme_item_dark
          }
        />
      </div>
    </div>
  );
};

export default ThemeToggler;
