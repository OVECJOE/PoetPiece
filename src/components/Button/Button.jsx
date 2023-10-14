import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, type, className }) => {
  return (
    <button className={`btn ${className}`} type={type ?? "button"}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
