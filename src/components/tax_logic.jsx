import React, { useState } from 'react';

export default function Tax() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // 1 – 216 200	18% of taxable income
  // 216 201 – 337 800	38 916 + 26% of taxable income above 216 200
  // 337 801 – 467 500	70 532 + 31% of taxable income above 337 800
  // 467 501 – 613 600	110 739 + 36% of taxable income above 467 500
  // 613 601 – 782200	163335 + 39% of taxable income above 613 600
  // 782 201 – 1656600	229089  + 41% of taxable income above 782 200
  // 1 656 601 and above	587 593 + 45% of taxable income above 1 656 600

const amount = '';
let totalTaxPayment = '';

// 18%
if(amount > 1 && amount < 216200) {
  totalTaxPayment = amount * 0.18 
}
// 26%
if(amount > 216201 && amount < 337800){
  totalTaxPayment = amount - 216200 * 0.18 + 38916 
}
// 31%
if(amount > 337801 && amount < 467500){
  totalTaxPayment = amount - 337800 * 0.31 + 70532 
}
// 36%
if(amount > 467501 && amount < 613600){
  totalTaxPayment = amount - 467500 * 0.36 + 110739 
}
// 39%
if(amount > 613601 && amount < 782200){
  totalTaxPayment = amount - 613600 * 0.39 + 163335 
}
// 41%
if(amount > 782201 && amount < 1656600){
  totalTaxPayment = amount - 782200 * 0.41 + 229089 
}
// 45%
if(amount > 1656601){
  totalTaxPayment = amount * 0.45 + 587593 
}




console.log(totalTaxPayment);


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}