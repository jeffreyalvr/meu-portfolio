import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import book from "@language/book.json";

import Nav from "@components/Nav";
import { CompactHero } from "@components/Hero";
import Footer from "@components/Footer";
import Wrapper from "@components/Wrapper";
import FloatingButton from "@components/FloatingButton";
import { ActionButton } from "@components/Button";
import { Title, SubTitle } from "@components/Text";

import open_icon from "@assets/icons/open.png";

import useLanguageStore from "@/store/useLanguageStore";

const AllWorks = () => {
  const language = useLanguageStore((state) => state.language);

  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

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

  let navigate = useNavigate();

  const handleViewProject = () => {
    let path = "/works/1";
    navigate(path);
  };

  return (
    <>
      <Nav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        linkItems={[
          {
            page: {
              pt: book.pt.nav.nav_item_home,
              en: book.en.nav.nav_item_home,
            },
            useLink: true,
            link: "/",
            sectionId: 1,
          },
          {
            page: {
              pt: book.pt.nav.nav_item_work,
              en: book.en.nav.nav_item_work,
            },
            useLink: false,
            sectionRef: section_works,
            sectionId: 2,
          },
          {
            page: {
              pt: book.pt.nav.nav_item_contact,
              en: book.en.nav.nav_item_contact,
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
            {language === "pt"
              ? book.pt.sections.sec_works_title
              : book.en.sections.sec_works_title}
          </Title>
          <SubTitle>
            {language === "pt"
              ? book.pt.sections.sec_works_subtitle
              : book.en.sections.sec_works_subtitle}
          </SubTitle>

          <div className="works">
            <div className="work-item">
              <div className="hover-overlay">
                <ActionButton
                  overrideClass="invert-img-hover"
                  text={
                    language === "pt"
                      ? book.pt.sections.sec_works_project_button
                      : book.en.sections.sec_works_project_button
                  }
                  icon={open_icon}
                  func={handleViewProject}
                />
              </div>
              <h3>Github Repo Browser</h3>
            </div>

            <div className="work-item">
              <div className="hover-overlay">
                <ActionButton
                  overrideClass="invert-img-hover"
                  text={
                    language === "pt"
                      ? book.pt.sections.sec_works_project_button
                      : book.en.sections.sec_works_project_button
                  }
                  icon={open_icon}
                  func={handleViewProject}
                />
              </div>
              <h3>Buscador Imagens</h3>
            </div>

            <div className="work-item">
              <div className="hover-overlay">
                <ActionButton
                  overrideClass="invert-img-hover"
                  text={
                    language === "pt"
                      ? book.pt.sections.sec_works_project_button
                      : book.en.sections.sec_works_project_button
                  }
                  icon={open_icon}
                  func={handleViewProject}
                />
              </div>
              <h3>Weather App</h3>
            </div>

            <div className="work-item">
              <div className="hover-overlay">
                <ActionButton
                  overrideClass="invert-img-hover"
                  text={
                    language === "pt"
                      ? book.pt.sections.sec_works_project_button
                      : book.en.sections.sec_works_project_button
                  }
                  icon={open_icon}
                  func={handleViewProject}
                />
              </div>
              <h3>Todo List Simples</h3>
            </div>

            <div className="work-item">
              <div className="hover-overlay">
                <ActionButton
                  overrideClass="invert-img-hover"
                  text={
                    language === "pt"
                      ? book.pt.sections.sec_works_project_button
                      : book.en.sections.sec_works_project_button
                  }
                  icon={open_icon}
                  func={handleViewProject}
                />
              </div>
              <h3>Minha Lista de Compras</h3>
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

export default AllWorks;
