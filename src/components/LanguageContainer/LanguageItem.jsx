import useLanguageStore from "@/store/useLanguageStore";

const LanguageItem = ({ appTitle, languageName, targetLanguage }) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return (
    <div
      className="item"
      title={appTitle}
      onClick={() => setLanguage(targetLanguage)}
    >
      <span>{languageName}</span>
    </div>
  );
};

export default LanguageItem;
