import book from "@language/book.json";

import "./styles.css";

import useLanguageStore from "@/store/useLanguageStore";

const Roadmap = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="roadmap">
      <div className="road-item">
        <div className="signal-date">2015</div>
        <div className="signal-description">
          {language === "pt"
            ? book.pt.roadmap.rm_span_1
            : book.en.roadmap.rm_span_1}
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal-date">2018</div>
        <div className="signal-description">
          {language === "pt"
            ? book.pt.roadmap.rm_span_2
            : book.en.roadmap.rm_span_2}
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal-date">2020</div>
        <div className="signal-description">
          {language === "pt"
            ? book.pt.roadmap.rm_span_3
            : book.en.roadmap.rm_span_3}
        </div>
      </div>
      <div className="path now"></div>
      <div className="road-item">
        <div className="signal-date">2023</div>
        <div className="signal-description">
          {language === "pt"
            ? book.pt.roadmap.rm_span_4
            : book.en.roadmap.rm_span_4}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
