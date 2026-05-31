import React from "react";

import {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  addMany,
} from "./calculator";

function App() {

  const numbers = [10, 20, 30, 40];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>JavaScript Calculator App</h1>

      <h2>Addition: {add(10, 20)}</h2>

      <h2>Subtraction: {subtract(20, 5)}</h2>

      <h2>Multiplication: {multiply(5, 4)}</h2>

      <h2>Division: {divide(20, 4)}</h2>

      <h2>Modulus: {modulus(10, 3)}</h2>

      <h2>Add Many: {addMany(...numbers)}</h2>

    </div>
  );
}

export default App;