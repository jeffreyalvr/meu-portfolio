import { create } from "zustand";

const THEME_KEY = "theme";

const initialTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);

  if (stored === "light" || stored === "dark" || stored === "system")
    return stored;

  return "system";
};

const useThemeStore = create((set) => ({
  theme: initialTheme(),
  setTheme: (newState) => {
    localStorage.setItem(THEME_KEY, newState);
    set({ theme: newState });
  },
}));

export default useThemeStore;
