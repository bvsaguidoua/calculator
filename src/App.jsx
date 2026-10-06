import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (number) => {
    if (waitingForOperand) {
      setDisplay(number);
      setWaitingForOperand(false);
      return;
    }

    setDisplay(display === "0" ? number : display + number);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearCalculator = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const deleteNumber = () => {
    if (waitingForOperand) return;

    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const calculate = (first, second, operation) => {
    switch (operation) {
      case "+":
        return first + second;

      case "-":
        return first - second;

      case "×":
        return first * second;

      case "÷":
        return second === 0 ? "Error" : first / second;

      default:
        return second;
    }
  };

  const chooseOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (operator && waitingForOperand) {
      setOperator(nextOperator);
      return;
    }

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);

      if (result === "Error") {
        setDisplay("Error");
        setPreviousValue(null);
        setOperator(null);
        return;
      }

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    if (operator === null || previousValue === null) return;

    const inputValue = parseFloat(display);
    const result = calculate(previousValue, inputValue, operator);

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  return (
    <div className="app">

      <header className="header">
        <h1>BERNARDO V. SAGUIDO - IT3A</h1>
        <p>React Calculator</p>
      </header>

      <main className="calculator">

        <div className="display">
          <div className="previous-operation">
            {previousValue !== null && operator
              ? `${previousValue} ${operator}`
              : ""}
          </div>

          <div className="current-value">
            {display}
          </div>
        </div>

        <div className="buttons">

          <button
            className="button function"
            onClick={clearCalculator}
          >
            AC
          </button>

          <button
            className="button function"
            onClick={deleteNumber}
          >
            DEL
          </button>

          <button
            className="button function"
            onClick={percentage}
          >
            %
          </button>

          <button
            className="button operator"
            onClick={() => chooseOperator("÷")}
          >
            ÷
          </button>

          <button
            className="button"
            onClick={() => inputNumber("7")}
          >
            7
          </button>

          <button
            className="button"
            onClick={() => inputNumber("8")}
          >
            8
          </button>

          <button
            className="button"
            onClick={() => inputNumber("9")}
          >
            9
          </button>

          <button
            className="button operator"
            onClick={() => chooseOperator("×")}
          >
            ×
          </button>

          <button
            className="button"
            onClick={() => inputNumber("4")}
          >
            4
          </button>

          <button
            className="button"
            onClick={() => inputNumber("5")}
          >
            5
          </button>

          <button
            className="button"
            onClick={() => inputNumber("6")}
          >
            6
          </button>

          <button
            className="button operator"
            onClick={() => chooseOperator("-")}
          >
            −
          </button>

          <button
            className="button"
            onClick={() => inputNumber("1")}
          >
            1
          </button>

          <button
            className="button"
            onClick={() => inputNumber("2")}
          >
            2
          </button>

          <button
            className="button"
            onClick={() => inputNumber("3")}
          >
            3
          </button>

          <button
            className="button operator"
            onClick={() => chooseOperator("+")}
          >
            +
          </button>

          <button
            className="button zero"
            onClick={() => inputNumber("0")}
          >
            0
          </button>

          <button
            className="button"
            onClick={inputDecimal}
          >
            .
          </button>

          <button
            className="button equals"
            onClick={performCalculation}
          >
            =
          </button>

        </div>
      </main>

      <footer>
        <span>Built with</span> React + Vite
      </footer>

    </div>
  );
}

export default App;