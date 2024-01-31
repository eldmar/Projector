"use strict";

// 1 завдання

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split("").reverse();
reverseMaxValue = Number(reverseMaxValue.join(""));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 2 завдання

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

for (let number of resultsArray.flat(Infinity)) {
  if (productOfArray == undefined) {
    productOfArray = number;
  } else {
    productOfArray *= number;
  }
}
console.log(productOfArray); // 24

// productOfArray = 1;
// for (let number of resultsArray.flat(Infinity)) {
//   productOfArray *= number;
// }
// console.log(productOfArray); // 24s
