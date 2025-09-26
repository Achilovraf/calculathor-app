import styles from "./Button.module.css";

const Button = ({ label, type, onClick, isWide }) => {
    const buttonClass = `${styles.button} ${styles[type]} ${isWide ? styles.wide : ''}`
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
