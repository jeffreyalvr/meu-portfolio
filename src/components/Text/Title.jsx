const Title = ({ children, hover_title }) => {
  return <h2 title={hover_title && undefined}>{children}</h2>;
};

export default Title;
