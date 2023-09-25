import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import { CompactHero } from "../../components/Hero";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import FloatingButton from "../../components/FloatingButton";

const Home = () => {
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);

  const linkedin_url = "https://www.linkedin.com/in/jeffreyalvr/";
  const github_url = "https://github.com/jeffreyalvr";

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
      <Nav scrollToSection={scrollToSection} activeSection={activeSection} />
      <CompactHero linkedin_url={linkedin_url} github_url={github_url} />
      <Wrapper>
        <Footer />
        {floatingButtonVisibility && (
          <FloatingButton scrollToSection={scrollToSection} />
        )}
      </Wrapper>
    </>
  );
};

export default Home;
