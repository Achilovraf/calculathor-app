import { useState } from "react";
import styles from "./Calculator.module.css";
import Display from "../Display/Display";
import ButtonGrid from "../ButtonGrid/ButtonGrid"; // Button больше не нужен

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const calculate = (previousValue, currentValue, operator) => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return prev / current;
      default:
        return current;
    }
  };

  const handleButtonClick = (value) => {
    // Обработка нажатий кнопок
    if (!isNaN(value)) {
      if (waitingForNewValue) {
        setDisplayValue(String(value));
        setWaitingForNewValue(false);
      } else {
        setDisplayValue(
          displayValue === "0" ? String(value) : displayValue + value
        );
      }
      return;
    }

    // Обработка точки
    if (value === ".") {
      if (!displayValue.includes(".")) {
        setDisplayValue(displayValue + ".");
      }
      return;
    }

    // Обработка операторов
    if (["+", "-", "*", "/"].includes(value)) {
      if (operator && !waitingForNewValue) {
        const result = calculate(previousValue, displayValue, operator);
        setDisplayValue(String(result));
        setPreviousValue(result);
      } else {
        setPreviousValue(displayValue);
      }
      setOperator(value);
      setWaitingForNewValue(true);
      return;
    }

    // Обработка равно
    if (value === "=") {
      if (operator && previousValue !== null) {
        const result = calculate(previousValue, displayValue, operator);
        setDisplayValue(String(result));
        setPreviousValue(null);
        setOperator(null);
        setWaitingForNewValue(true);
      }
      return;
    }

    // Обработка AC (очистка)
    if (value === "clear") {
      setDisplayValue("0");
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(false);
      return;
    }

    // Обработка смены знака (+/-)
    if (value === "toggleSign") {
      setDisplayValue(String(parseFloat(displayValue) * -1));
      return;
    }

    // Обработка процента
    if (value === "percent") {
      setDisplayValue(String(parseFloat(displayValue) / 100));
      return;
    }

    console.log("Нажата кнопка:", value);
  };

  return (
    <div className={styles.calculator}>
      <Display value={displayValue} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
