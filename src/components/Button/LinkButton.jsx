import { Link } from "react-router-dom";

const LinkButton = ({ text, icon, url, overrideClass }) => {
  return (
    <div className="button-container">
      <Link
        className={`button ${overrideClass ? overrideClass : undefined}`}
        to={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon ? <img src={icon} /> : undefined}
        {text}
      </Link>
    </div>
  );
};

export default LinkButton;
