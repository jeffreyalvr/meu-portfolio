import { useState, useRef, useEffect } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import FloatingButton from "../../components/FloatingButton";

const Home = () => {
  const [lang, setLang] = useState("pt-br"); /* INFO: pt-br || en-ca */

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
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Hero linkedin_url={linkedin_url} github_url={github_url}>
        <Nav
          scrollToSection={scrollToSection}
          sections={{
            works: section_works,
            about: section_about,
            stack: section_stack,
            contact: section_contact,
          }}
          activeSection={activeSection}
        />
      </Hero>
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
    </LanguageContext.Provider>
  );
};

export default Home;
