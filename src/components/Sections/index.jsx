import { useContext } from "react";

import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import "./styles.css";

import { Title, SubTitle } from "../Text";

import img_linkedin from "../../assets/images/linkedin.png";
import img_profile from "../../assets/images/profile.jpeg";

import Button from "../Button";

import Works from "../Works";
import Roadmap from "../Roadmap";
import MinhaStack from "../MinhaStack";
import Contact from "../Contact";

const Sections = ({ linkedin_url }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <section>
        <Title>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_works_title
            : book.en_ca.sections.sec_works_title}
        </Title>
        <SubTitle>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_works_subtitle
            : book.en_ca.sections.sec_works_subtitle}
        </SubTitle>
        <Works />
      </section>

      <section>
        <Title>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_about_title
            : book.en_ca.sections.sec_about_title}
        </Title>
        <SubTitle>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_about_subtitle
            : book.en_ca.sections.sec_about_subtitle}
        </SubTitle>
        <div className="bio">
          <img src={img_profile} title="Jeffrey" alt="Foto" />
          <div className="description">
            <div className="main">
              <div className="tag">
                <span className="title">Jeffrey, 27</span>
              </div>
              <div className="additional">
                <span>
                  {lang === "pt-br"
                    ? book.pt_br.sections.sec_about_span_nationality
                    : book.en_ca.sections.sec_about_span_nationality}
                </span>
                <span>
                  {lang === "pt-br"
                    ? book.pt_br.sections.sec_about_span_spoken_languages
                    : book.en_ca.sections.sec_about_span_spoken_languages}
                </span>
                <span>
                  {lang === "pt-br"
                    ? book.pt_br.sections.sec_about_span_role
                    : book.en_ca.sections.sec_about_span_role}
                </span>
              </div>
            </div>
            <div className="action-buttons">
              <Button text="LinkedIn" icon={img_linkedin} url={linkedin_url} />
            </div>
          </div>
        </div>
        <Roadmap />
      </section>

      <section>
        <Title>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_stack_title
            : book.en_ca.sections.sec_stack_title}
        </Title>
        <SubTitle>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_stack_subtitle
            : book.en_ca.sections.sec_stack_subtitle}
        </SubTitle>
        <MinhaStack />
      </section>

      <section>
        <Title>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_contact_title
            : book.en_ca.sections.sec_contact_title}
        </Title>
        <SubTitle>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_contact_subtitle_1
            : book.en_ca.sections.sec_contact_subtitle_1}
        </SubTitle>
        <br />
        <SubTitle>
          {lang === "pt-br"
            ? book.pt_br.sections.sec_contact_subtitle_2
            : book.en_ca.sections.sec_contact_subtitle_2}
        </SubTitle>
        <Contact />
      </section>
    </>
  );
};

export default Sections;
