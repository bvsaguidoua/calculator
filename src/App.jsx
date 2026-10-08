import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const pressButton = (value) => {
    if (value === "AC") {
      setDisplay("0");
      return;
    }

    if (value === "DEL") {
      setDisplay((current) => {
        if (current.length <= 1) return "0";
        return current.slice(0, -1);
      });
      return;
    }

    if (value === "=") {
      // Does nothing — calculator cannot perform operations
      return;
    }

    if (value === "%") {
      setDisplay((current) => (current === "0" ? "%" : current + "%"));
      return;
    }

    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay((current) => current + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button onClick={() => pressButton("AC")}>AC</button>
        <button onClick={() => pressButton("DEL")}>DEL</button>
        <button onClick={() => pressButton("%")}>%</button>
        <button
          className="operator"
          onClick={() => pressButton("÷")}
        >
          ÷
        </button>

        <button onClick={() => pressButton("7")}>7</button>
        <button onClick={() => pressButton("8")}>8</button>
        <button onClick={() => pressButton("9")}>9</button>
        <button
          className="operator"
          onClick={() => pressButton("×")}
        >
          ×
        </button>

        <button onClick={() => pressButton("4")}>4</button>
        <button onClick={() => pressButton("5")}>5</button>
        <button onClick={() => pressButton("6")}>6</button>
        <button
          className="operator"
          onClick={() => pressButton("−")}
        >
          −
        </button>

        <button onClick={() => pressButton("1")}>1</button>
        <button onClick={() => pressButton("2")}>2</button>
        <button onClick={() => pressButton("3")}>3</button>
        <button
          className="operator"
          onClick={() => pressButton("+")}
        >
          +
        </button>

        <button onClick={() => pressButton("0")}>0</button>
        <button onClick={() => pressButton(".")}>.</button>
        <button
          className="equals"
          onClick={() => pressButton("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;