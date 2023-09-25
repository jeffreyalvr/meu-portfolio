import { useState, useEffect, useRef } from "react";

import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import book from "../../language/book.json";

import Nav from "../../components/Nav";
import { CompactHero } from "../../components/Hero";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import FloatingButton from "../../components/FloatingButton";
import { ActionButton } from "../../components/Button";
import { Title, SubTitle } from "../../components/Text";

import thumb from "../../assets/images/projects/thumb.png";
import open_icon from "../../assets/images/open.png";

const Works = () => {
  const { lang } = useContext(LanguageContext);

  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

  const [activeSection, setActiveSection] = useState(0);

  const section_works = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollY = window.scrollY;
    scrollY > 500
      ? setFloatingButtonVisibility(true)
      : setFloatingButtonVisibility(false);
  };

  const scrollToSection = (elementReference, section = 0) => {
    setActiveSection(section);

    window.scrollTo({
      top: elementReference === 0 ? 0 : elementReference.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        linkItems={[
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_home,
              en_ca: book.en_ca.nav.nav_item_home,
            },
            useLink: true,
            link: "/",
            sectionId: 1,
          },
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_work,
              en_ca: book.en_ca.nav.nav_item_work,
            },
            useLink: false,
            sectionRef: section_works,
            sectionId: 2,
          },
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_contact,
              en_ca: book.en_ca.nav.nav_item_contact,
            },
            useLink: true,
            link: "/contact",
            sectionId: 3,
          },
        ]}
      />
      <CompactHero linkedin_url={linkedin_url} github_url={github_url} />
      <Wrapper>
        <section className="move-up" ref={section_works}>
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

          <div className="works">
            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>

            <div className="work-item">
              <div className="item-container">
                <ActionButton
                  overrideClass="invert-img-hover my-20 hidden"
                  text={
                    lang === "pt-br"
                      ? book.pt_br.sections.sec_works_project_button
                      : book.en_ca.sections.sec_works_project_button
                  }
                  icon={open_icon}
                />
                <h3>Github Repo Browser</h3>
              </div>
              <img className="banner" src={thumb} />
            </div>
          </div>
        </section>
        <Footer />
        {floatingButtonVisibility && (
          <FloatingButton scrollToSection={scrollToSection} />
        )}
      </Wrapper>
    </>
  );
};

export default Works;
