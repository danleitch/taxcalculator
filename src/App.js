import React, { useState } from 'react';
import './App.css';
import Tax from './components/tax_logic.jsx';

function App() {
  const [count, setCount] = useState(null);
  const [taxBracket, setTaxBracket] = useState(null);

  const inputHandler = (e) => {
    const rawInputData = e.target.value;
    taxCalcs(rawInputData);
  };

  // let amount = '';

  const taxCalcs = (amount) => {
    let totalTaxPayment = '';
    // Tax Rates Based on 2022 rates.

    // 18%
    if (amount > 1 && amount < 216200) {
      totalTaxPayment = amount * 0.18;
      setTaxBracket('18%');
    }
    // 26%
    if (amount > 216201 && amount < 337800) {
      totalTaxPayment = amount - 216200 * 0.26 + 38916;
      setTaxBracket('26%');
    }
    // 31%
    if (amount > 337801 && amount < 467500) {
      totalTaxPayment = amount - 337800 * 0.31 + 70532;
      setTaxBracket('31%');
    }
    // 36%
    if (amount > 467501 && amount < 613600) {
      totalTaxPayment = amount - 467500 * 0.36 + 110739;
      setTaxBracket('36%');
    }
    // 39%
    if (amount > 613601 && amount < 782200) {
      totalTaxPayment = amount - 613600 * 0.39 + 163335;
      setTaxBracket('39%');
    }
    // 41%
    if (amount > 782201 && amount < 1656600) {
      totalTaxPayment = amount - 782200 * 0.41 + 229089;
      setTaxBracket('41%');
    }
    // 45%
    if (amount > 1656601) {
      totalTaxPayment = amount * 0.45 + 587593;
      setTaxBracket('45%');
    }

    if (buttonState) {
      setCount(totalTaxPayment / 12);
    }
    if (!buttonState) {
      setCount(totalTaxPayment);
    }
  };

  let buttonState = true;

  const buttonHandler = (e) => {
    buttonState = !buttonState;
    setCount(count / 12);
    console.log(count);
    e.preventDefault();
  };

  return (
    <div>
      <header>
        <h1>Income Tax Calculator</h1>
      </header>
      <Tax />
      {!count && <h1>Enter Income and Submit </h1>}
      {taxBracket && <h2>Your Tax Bracket is</h2>}
      <h2>{taxBracket}</h2>
      {count && (
        <h2>
          Tax due <br /> R{count.toFixed(2)}
        </h2>
      )}
      <form>
        <input
          onChange={inputHandler}
          type="number"
          className="todo-input"
          placeholder="Amount"
        />

        <button className="todo-button" type="submit" onClick={buttonHandler}>
          {buttonState ? <i>Annual</i> : <i>Monthly</i>}
        </button>
      </form>
    </div>
  );
}

export default App;
