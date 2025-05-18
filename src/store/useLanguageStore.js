import { create } from "zustand";

const LANGUAGE_KEY = "lang";

const initialLanguage = () => {
  const stored = localStorage.getItem(LANGUAGE_KEY);

  if (stored === "pt" || stored === "en") return stored;
};

const useLanguageStore = create((set) => ({
  language: initialLanguage(),
  setLanguage: (newState) => {
    localStorage.setItem(LANGUAGE_KEY, newState);
    set({ language: newState });
  },
}));

export default useLanguageStore;
