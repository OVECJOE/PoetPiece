import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, type, style }) => {
  return (
    <button className="btn" style={style} type={type ?? "button"}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
