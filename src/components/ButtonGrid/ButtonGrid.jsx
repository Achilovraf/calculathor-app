import styles from "./ButtonGrid.module.css";
import Button from "../Button/Button";

const ButtonGrid = ({ onButtonClick }) => {  // 👈 Добавили параметр
  const buttons = [
    { label: "AC", type: "function", value: "clear" },
    { label: "+/-", type: "function", value: "toggleSign" },
    { label: "%", type: "function", value: "percent" },
    { label: "÷", type: "operator", value: "/" },
    { label: "7", type: "number", value: "7" },
    { label: "8", type: "number", value: "8" },
    { label: "9", type: "number", value: "9" },
    { label: "×", type: "operator", value: "*" },
    { label: "4", type: "number", value: "4" },
    { label: "5", type: "number", value: "5" },
    { label: "6", type: "number", value: "6" },
    { label: "-", type: "operator", value: "-" },
    { label: "1", type: "number", value: "1" },
    { label: "2", type: "number", value: "2" },
    { label: "3", type: "number", value: "3" },
    { label: "+", type: "operator", value: "+" },
    { label: "0", type: "number", value: "0", isWide: true },
    { label: ".", type: "number", value: "." },
    { label: "=", type: "operator", value: "=" },
  ];

  return (
    <div className={styles.buttonGrid}>  {/* 👈 Исправили имя класса */}
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          type={button.type}
          onClick={() => onButtonClick(button.value)}
          isWide={button.isWide}
        />
      ))}
    </div>
  );
};

export default ButtonGrid;