import { useState, useEffect, useRef } from "react";

import book from "@language/book.json";

import Nav from "@components/Nav";
import { CompactHero } from "@components/Hero";
import Footer from "@components/Footer";
import Wrapper from "@components/Wrapper";
import ContactComponent from "@components/Contact";
import FloatingButton from "@components/FloatingButton";
import { Title, SubTitle } from "@components/Text";

import useLanguageStore from "@/store/useLanguageStore";

const Contact = () => {
  const language = useLanguageStore((state) => state.language);

  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

  const [activeSection, setActiveSection] = useState(0);

  const section_contact = useRef(null);

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
            useLink: false,
            sectionRef: section_contact,
            sectionId: 3,
          },
        ]}
      />
      <CompactHero linkedin_url={linkedin_url} github_url={github_url} />
      <Wrapper>
        <section className="move-up" ref={section_contact}>
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
          <ContactComponent />
        </section>
        <Footer />
        {floatingButtonVisibility && (
          <FloatingButton scrollToSection={scrollToSection} />
        )}
      </Wrapper>
    </>
  );
};

export default Contact;
