import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

const Roadmap = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="roadmap">
      <div className="road-item">
        <div className="signal-date">2015</div>
        <div className="signal-description">
          {lang === "pt-br"
            ? book.pt_br.roadmap.rm_span_1
            : book.en_ca.roadmap.rm_span_1}
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal-date">2018</div>
        <div className="signal-description">
          {lang === "pt-br"
            ? book.pt_br.roadmap.rm_span_2
            : book.en_ca.roadmap.rm_span_2}
        </div>
      </div>
      <div className="path"></div>
      <div className="road-item">
        <div className="signal-date">2020</div>
        <div className="signal-description">
          {lang === "pt-br"
            ? book.pt_br.roadmap.rm_span_3
            : book.en_ca.roadmap.rm_span_3}
        </div>
      </div>
      <div className="path now"></div>
      <div className="road-item">
        <div className="signal-date">2023</div>
        <div className="signal-description">
          {lang === "pt-br"
            ? book.pt_br.roadmap.rm_span_4
            : book.en_ca.roadmap.rm_span_4}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
