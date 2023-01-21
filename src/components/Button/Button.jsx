import styles from "./Button.module.css";

const Button = ({
  onClick,
  isDisable = true,
  children
}) => {

  return (
    <button
      onClick={onClick}
      className={isDisable ? [styles.btn, styles._disable].join(' ') : styles.btn}
      type="button">
      {children}
    </button>
  );
};

export default Button;
