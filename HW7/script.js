"use strict";

// завдання 1

const resultsArray = [1, 2, [3, [4]]];

let productOfArray = resultsArray
  .flat(Infinity)
  .reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

console.log(productOfArray); // 24

// 2 завдання

// приклад об'єкту
const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};
function optimizer(data) {
  let correctProductArray = Object.entries(priceData).map(([key, value]) => {
    key = key.toLowerCase();
    value = Number(value).toFixed(2);
    return [key, value];
  });
  return Object.fromEntries(correctProductArray);
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3 завдання

const userNames = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];
let vowelLetters = ["А", "І", "О", "Е", "И", "Є", "Я", "Ю"];
let filteredNames = userNames.filter((currentValue) => {
  if (vowelLetters.includes(currentValue[0])) {
    return currentValue;
  }
});

let initialValue = [];
let filteredNamesReduce = userNames.map((accumulator, currentValue) => {
  if (vowelLetters.includes(currentValue[0])) {
    return accumulator + currentValue;
  }
}, []);
// тут ваш код...

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesReduce);
