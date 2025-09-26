import styles from "./Display.module.css";

const Display = ({ value }) => {
  return (
    <div className={styles.display}>
      <span className={styles.displayText}>{value}</span>
    </div>
  );
};

export default Display