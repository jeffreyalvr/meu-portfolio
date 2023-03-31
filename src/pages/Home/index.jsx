import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Nav />
      <Hero />
      <Section
        title="Uma section qualquer"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        variant="light"
      />
      <Footer />
    </div>
  );
};

export default Home;
