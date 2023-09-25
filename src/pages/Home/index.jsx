import { useState, useRef, useEffect } from "react";

import book from "../../language/book.json";

import Nav from "../../components/Nav";
import { DefaultHero } from "../../components/Hero";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import FloatingButton from "../../components/FloatingButton";

const Home = () => {
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

  const section_works = useRef(null);
  const section_about = useRef(null);
  const section_stack = useRef(null);
  const section_contact = useRef(null);

  const [activeSection, setActiveSection] = useState(0);

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
              pt_br: book.pt_br.nav.nav_item_work,
              en_ca: book.en_ca.nav.nav_item_work,
            },
            sectionRef: section_works,
            sectionId: 1,
          },
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_about,
              en_ca: book.en_ca.nav.nav_item_about,
            },
            sectionRef: section_about,
            sectionId: 2,
          },
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_stack,
              en_ca: book.en_ca.nav.nav_item_stack,
            },
            sectionRef: section_stack,
            sectionId: 3,
          },
          {
            page: {
              pt_br: book.pt_br.nav.nav_item_contact,
              en_ca: book.en_ca.nav.nav_item_contact,
            },
            sectionRef: section_contact,
            sectionId: 4,
          },
        ]}
      />
      <DefaultHero linkedin_url={linkedin_url} github_url={github_url} />
      <Wrapper>
        <Sections
          linkedin_url={linkedin_url}
          sections={{
            works: section_works,
            about: section_about,
            stack: section_stack,
            contact: section_contact,
          }}
        />
        <Footer />
        {floatingButtonVisibility && (
          <FloatingButton scrollToSection={scrollToSection} />
        )}
      </Wrapper>
    </>
  );
};

export default Home;
