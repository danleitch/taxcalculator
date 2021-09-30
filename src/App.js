import React, { useState } from 'react';
import './App.css';
import Tax from './components/tax_logic.jsx';

function App() {
  const [taxBracket, setTaxBracket] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(null);

  const inputHandler = (e) => {
    const rawInputData = e.target.value;
    taxCalcs(rawInputData * 12);
    setTotalEarnings(rawInputData.toLocaleString('en-US'));
  };

  // let annualEarnings = '';

  const taxCalcs = (annualEarnings) => {
    let totalTaxPayment = '';
    // Tax Rates Based on 2022 rates.

    // 18%
    if (annualEarnings > 1 && annualEarnings < 216200) {
      totalTaxPayment = annualEarnings * 0.18;
      setTaxBracket(0.18);
    }
    // 26%
    if (annualEarnings > 216201 && annualEarnings < 337800) {
      totalTaxPayment = (annualEarnings - 216200) * 0.26 + 38916;
      setTaxBracket(0.26);
    }
    // 31%
    if (annualEarnings > 337801 && annualEarnings < 467500) {
      totalTaxPayment = (annualEarnings - 337800) * 0.31 + 70532;
      setTaxBracket(0.31);
    }
    // 36%
    if (annualEarnings > 467501 && annualEarnings < 613600) {
      totalTaxPayment = annualEarnings - 467500 * 0.36 + 110739;
      setTaxBracket(0.36);
    }
    // 39%
    if (annualEarnings > 613601 && annualEarnings < 782200) {
      totalTaxPayment = annualEarnings - 613600 * 0.39 + 163335;
      setTaxBracket(0.39);
    }
    // 41%
    if (annualEarnings > 782201 && annualEarnings < 1656600) {
      totalTaxPayment = annualEarnings - 782200 * 0.41 + 229089;
      setTaxBracket(0.41);
    }
    // 45%
    if (annualEarnings > 1656601) {
      totalTaxPayment = annualEarnings * 0.45 + 587593;
      setTaxBracket(0.45);
    }
  };

  const yearlyEarning = totalEarnings * 12;

  return (
    <div>
      <header>
        <h1>Income Tax Calculator </h1>
      </header>
      <Tax />

      {!totalEarnings && <h1>Enter Income</h1>}
      {taxBracket && (
        <div>
          <h2>
            Your tax bracket is {taxBracket * 100}%, tax needing to be paid per
            a year is R{yearlyEarning * taxBracket}
          </h2>
          <h2>
            Your take home monthly salary R
            {(totalEarnings - totalEarnings * taxBracket).toLocaleString(
              'en-US'
            )}
          </h2>
          <h2>
            You pay R{(totalEarnings * taxBracket).toLocaleString('en-US')} in
            tax per month
          </h2>
        </div>
      )}

      {totalEarnings && <h2>Annual Earning is R{yearlyEarning}</h2>}
      <form>
        <input
          onChange={inputHandler}
          type="number"
          className="todo-input"
          placeholder="Monthly Salary"
        />
      </form>
    </div>
  );
}

export default App;
