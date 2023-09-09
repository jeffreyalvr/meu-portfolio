const ActionButton = ({ text, icon, overrideClass }) => {
  return (
    <button className={`button ${overrideClass ? overrideClass : undefined}`}>
      {icon ? <img src={icon} /> : undefined}
      {text}
    </button>
  );
};

export default ActionButton;
