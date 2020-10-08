import React, { useState, useEffect } from "react";
import "./styles.css.css";

export default function App() {
  const [operator, setOperator] = useState("+");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState(null);
  const [operationsCount, setOperationsCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const handleOperatorClick = (e) => {
    setOperator(e.target.dataset.operator);
    setOperationsCount(operationsCount + 1);
    setShowResult(true);
    if (e.target.dataset.operator === "+") {
      setResult(operand1 + operand2);
    } else if (e.target.dataset.operator === "-") {
      setResult(operand1 - operand2);
    } else if (e.target.dataset.operator === "*") {
      setResult(operand1 * operand2);
    } else if (e.target.dataset.operator === "/") {
      setResult(operand1 / operand2);
    }
  };
  const handleReset = () => {
    setOperand1("");
    setOperand2("");
    setShowResult(false);
  };
  return (
    <div className="container">
      <div className="operations-count" data-testid="total-operations">
        Total operations performed: {operationsCount}
      </div>
      <div className="app">
        <form>
          <div className="expresstion">
            <input
              data-testid="app-input1"
              type="number"
              value={operand1}
              required
              onChange={(e) => setOperand1(Number(e.target.value))}
            />
            <span className="operator">{operator}</span>
            <input
              data-testid="app-input2"
              type="number"
              value={operand2}
              required
              onChange={(e) => setOperand2(Number(e.target.value))}
            />
          </div>
          <div className="operations">
            <div
              className="operation"
              role="button"
              data-operator="+"
              onClick={handleOperatorClick}
              data-testid="addButton"
            >
              +
            </div>
            <div
              className="operation"
              role="button"
              data-operator="-"
              onClick={handleOperatorClick}
              data-testid="subtractButton"
            >
              -
            </div>
            <div
              className="operation"
              role="button"
              data-operator="*"
              onClick={handleOperatorClick}
              data-testid="multiplyButton"
            >
              *
            </div>
            <div
              className="operation"
              role="button"
              data-operator="/"
              onClick={handleOperatorClick}
              data-testid="divideButton"
            >
              /
            </div>
          </div>

          <div className="result-container">
            <div className="reset" role="button" onClick={handleReset}>
              Reset
            </div>
            {showResult && (
              <div className="result" data-testid="result">
                Result: {result}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
