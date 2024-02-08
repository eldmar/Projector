"use strict";

// 1 завдання

function iterativeOddSumTo(number) {
  // тут ваш код
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(9)); // 25
console.log(iterativeOddSumTo(10)); // 25

// 2 завдання

function recursiveOddSumTo(number) {
  // тут ваш код
  if (number === 1) {
    return 1;
  } else {
    if (number % 2 === 1) {
      return (number += recursiveOddSumTo(number - 1));
    } else {
      return recursiveOddSumTo(number - 1);
    }
  }
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(9)); // 25
console.log(recursiveOddSumTo(10)); // 25

// 3 завдання

const isXOEqual = (str) => {
  // тут ваш код

  let dataArray = str.toLowerCase().split("");
  let countX = 0;
  let countO = 0;
  let targetX = "x";
  let targetO = "o";

  if (dataArray.includes("x") || dataArray.includes("o")) {
    for (let i = 0; i <= dataArray.length; i++) {
      if (dataArray[i] === targetX) {
        countX++;
      } else if (dataArray[i] === targetO) {
        countO++;
      }
    }
  }
  if (countX === countO) {
    return true;
  } else {
    return false;
  }
};

console.log(isXOEqual("ooxx")); // true
console.log(isXOEqual("xooxx")); // false
console.log(isXOEqual("ooxXm")); // true
console.log(isXOEqual("zpzpzpp")); // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")); // false
