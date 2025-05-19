import book from "@language/book.json";

import "./styles.css";

import { Title, SubTitle } from "@components/Text";

import img_linkedin from "@assets/icons/linkedin.png";
import img_profile from "@assets/images/profile.jpeg";

import { LinkButton } from "@components/Button";

import Works from "@components/Works";
import Roadmap from "@components/Roadmap";
import MinhaStack from "@components/MinhaStack";
import Contact from "@components/Contact";

import useLanguageStore from "@/store/useLanguageStore";

const Sections = ({ linkedin_url, sections }) => {
  const language = useLanguageStore((state) => state.language);

  return (
    <>
      <section className="move-up" ref={sections.works}>
        <Title>
          {language === "pt"
            ? book.pt.sections.sec_works_title
            : book.en.sections.sec_works_title}
        </Title>
        <SubTitle>
          {language === "pt"
            ? book.pt.sections.sec_works_subtitle
            : book.en.sections.sec_works_subtitle}
        </SubTitle>
        <Works />
      </section>

      <section className="move-up" ref={sections.about}>
        <Title>
          {language === "pt"
            ? book.pt.sections.sec_about_title
            : book.en.sections.sec_about_title}
        </Title>
        <SubTitle>
          {language === "pt"
            ? book.pt.sections.sec_about_subtitle
            : book.en.sections.sec_about_subtitle}
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
                  {language === "pt"
                    ? book.pt.sections.sec_about_span_nationality
                    : book.en.sections.sec_about_span_nationality}
                </span>
                <span>
                  {language === "pt"
                    ? book.pt.sections.sec_about_span_spoken_languages
                    : book.en.sections.sec_about_span_spoken_languages}
                </span>
                <span>
                  {language === "pt"
                    ? book.pt.sections.sec_about_span_role
                    : book.en.sections.sec_about_span_role}
                </span>
              </div>
            </div>
            <div className="action-buttons">
              <LinkButton
                text="LinkedIn"
                icon={img_linkedin}
                url={linkedin_url}
              />
            </div>
          </div>
        </div>
        <Roadmap />
      </section>

      <section className="move-up" ref={sections.stack}>
        <Title>
          {language === "pt"
            ? book.pt.sections.sec_stack_title
            : book.en.sections.sec_stack_title}
        </Title>
        <SubTitle>
          {language === "pt"
            ? book.pt.sections.sec_stack_subtitle
            : book.en.sections.sec_stack_subtitle}
        </SubTitle>
        <MinhaStack />
      </section>

      <section className="move-up" ref={sections.contact}>
        <Title>
          {language === "pt"
            ? book.pt.sections.sec_contact_title
            : book.en.sections.sec_contact_title}
        </Title>
        <SubTitle>
          {language === "pt"
            ? book.pt.sections.sec_contact_subtitle_1
            : book.en.sections.sec_contact_subtitle_1}
        </SubTitle>
        <br />
        <SubTitle>
          {language === "pt"
            ? book.pt.sections.sec_contact_subtitle_2
            : book.en.sections.sec_contact_subtitle_2}
        </SubTitle>
        <Contact />
      </section>
    </>
  );
};

export default Sections;
