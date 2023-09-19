const ActionButton = ({ text, icon, overrideClass, func }) => {
  return (
    <button
      className={`button ${overrideClass ? overrideClass : undefined}`}
      onClick={func || null}
    >
      {icon ? <img src={icon} /> : undefined}
      {text}
    </button>
  );
};

export default ActionButton;
