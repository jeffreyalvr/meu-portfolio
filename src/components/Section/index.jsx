import "./styles.css";

const Section = ({ children, title, description, variant }) => {
  return (
    <section className={variant}>
      <h1>meus projetos</h1>
      <h2>{title}</h2>
      <span>{description}</span>
      {children}
    </section>
  );
};

export default Section;
