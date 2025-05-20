import { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

import book from "@language/book.json";

import Nav from "@components/Nav";
import { CompactHero } from "@components/Hero";
import Footer from "@components/Footer";
import Wrapper from "@components/Wrapper";
import FloatingButton from "@components/FloatingButton";
import { LinkButton } from "@components/Button";
import { Title, SubTitle } from "@components/Text";

import open_icon from "@assets/icons/open.png";

import useLanguageStore from "@/store/useLanguageStore";

import works from "@works/works.json";

const WorkInfo = () => {
  const { id } = useParams();
  const idFromParams = parseInt(id);

  const language = useLanguageStore((state) => state.language);

  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);

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
            useLink: true,
            link: "/works",
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
      <CompactHero />
      <Wrapper>
        <section className="move-up" ref={section_works}>
          <Title>{works.find((work) => work.id === idFromParams).title}</Title>
          <SubTitle>
            {works.find((work) => work.id === idFromParams).pt.subtitle}
          </SubTitle>
          <div className="separator"></div>
          <div className="project-summary">
            <div className="left-panel">
              <div className="item">
                <b>
                  {language === "pt"
                    ? book.pt.workInfo.wks_b_1
                    : book.en.workInfo.wks_b_1}
                </b>
                <p>
                  {
                    works.find((work) => work.id === idFromParams).pt.roles
                      .content
                  }
                </p>
              </div>
              <div className="item">
                <b>
                  {" "}
                  {language === "pt"
                    ? book.pt.workInfo.wks_b_2
                    : book.en.workInfo.wks_b_2}
                </b>
                <div className="stack-container">
                  {works
                    .find((work) => work.id === idFromParams)
                    .stack_items.map((stackItem) => (
                      <div className="tag">{stackItem}</div>
                    ))}
                </div>
              </div>
            </div>
            <div className="right-panel">
              <b>
                {" "}
                {language === "pt"
                  ? book.pt.workInfo.wks_b_3
                  : book.en.workInfo.wks_b_3}
              </b>
              <p>
                {
                  works.find((work) => work.id === idFromParams).pt.description
                    .content
                }
              </p>
              <LinkButton
                overrideClass="invert-img-hover my-20"
                text={
                  language === "pt"
                    ? book.pt.workInfo.wks_button
                    : book.en.workInfo.wks_button
                }
                icon={open_icon}
                url=""
              />
            </div>
          </div>
          <div className="project-gallery">
            <img src="" />
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

export default WorkInfo;
