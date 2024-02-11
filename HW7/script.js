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
let filteredNames = userNames.filter((name) => {
  if (vowelLetters.includes(name[0])) {
    return name;
  }
});

let initialValue = [];
let filteredNamesReduce = userNames.reduce((accumulator, currentValue) => {
  if (vowelLetters.includes(currentValue[0])) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesReduce);

// 4 завдання

const userFullNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];
let initials = [];

userFullNames.forEach((name) => {
  let partOfName = name.split(" ");
  let firstLetter = "";

  partOfName.forEach((letter) => {
    firstLetter += letter.charAt(0) + ".";
    return firstLetter;
  });

  initials.push(firstLetter);
});
initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 5 завдання

let emptyArray = [];
function sortArray(arr) {
  if (arr === null || arr === undefined) {
    return emptyArray;
  } else {
    return arr.sort((a, b) => a - b);
  }
}

console.log(sortArray([1, 12, 10, 50, 5])); // поверне [1,5,10,12,50]
console.log(sortArray(null)); // поверне []
