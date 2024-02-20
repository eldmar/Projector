"use strict";

//  1 завдання

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

function addThemAll(...args) {
  return args.reduce(
    (acccumulator, currentValue) => acccumulator + currentValue,
    0
  );
}

// 2 завдання

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

// 3

function descendingOrder(n) {
  //...
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));

// 4

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// highAndLow("1 2 3 4 5");  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// 5

function calculateProfit(amount, percent, period) {
  // write code here
  let totalAmount = amount;
  for (let i = 0; i < period; i++) {
    let oneYearProfit = totalAmount * (percent / 100);
    totalAmount += oneYearProfit;
  }
  return Math.floor(totalAmount - amount);
}

console.log(calculateProfit(1000, 5, 1)); // 50
console.log(calculateProfit(12500, 3, 12)); // 5322
