import { useState } from "react";
import {
  add,
  subtract,
  multiply,
  divide,
  modulus
} from "./calculator";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>JavaScript Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setResult(add(num1, num2))}>
        Add
      </button>

      <button onClick={() => setResult(subtract(num1, num2))}>
        Subtract
      </button>

      <button onClick={() => setResult(multiply(num1, num2))}>
        Multiply
      </button>

      <button onClick={() => setResult(divide(num1, num2))}>
        Divide
      </button>

      <button onClick={() => setResult(modulus(num1, num2))}>
        Modulus
      </button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;