import { useState, useEffect, useRef, useContext } from "react";

import book from "../../language/book.json";

import Nav from "../../components/Nav";
import { CompactHero } from "../../components/Hero";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import FloatingButton from "../../components/FloatingButton";
import { LinkButton } from "../../components/Button";
import { Title, SubTitle } from "../../components/Text";

import open_icon from "../../assets/images/open.png";

const WorkItem = () => {
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const project_url = "https://github-repo-browser.vercel.app/";

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
            useLink: true,
            link: "/works",
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
      <CompactHero />
      <Wrapper>
        <section className="move-up" ref={section_works}>
          <Title>GitHub Repo Browser</Title>
          <SubTitle>
            Buscador de usuários e seus repositórios públicos no GitHub.
          </SubTitle>
          <div className="separator"></div>
          <div className="project-summary">
            <div className="left-panel">
              <div className="item">
                <b>Minha Atribuição</b>
                <p>Desenvolvimento completo do projeto.</p>
              </div>
              <div className="item">
                <b>Stack utilizada</b>
                <p>React JS (Vite)</p>
                <p>LocalStorage</p>
                <p>Axios</p>
                <p>API Github</p>
              </div>
            </div>
            <div className="right-panel">
              <b>Descrição</b>
              <p>
                A aplicação traz um ambiente organizado para busca de usuários
                do GitHub, e lista alguns dos seus detalhes mais importantes:
                repositórios públicos, os detalhes destes repositórios e outras
                informações gerais do usuário, como: seguidores, quantidade de
                repositórios e links.
              </p>
              <LinkButton
                overrideClass="invert-img-hover my-20"
                text="Abrir demonstração"
                icon={open_icon}
                url={project_url}
              />
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

export default WorkItem;
