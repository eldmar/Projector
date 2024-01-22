"use strict";

// 1 завдання

let number = prompt("Вкажіть число");

// Спосіб For

if (isNaN(number)) {
  console.log("Помилка: введіть число");
} else {
  for (let i = 1; i < number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// //  Спосіб  While

if (isNaN(number)) {
  console.log("Помилка: введіть число");
} else {
  let i = 1;
  while (i < number) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

// 2 завдання

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// 3 завдання

let string = "42559125";
let result = "";

for (let i = 0; i <= string.length; i++) {
  result = string[i] < 5 ? (result += 0) : (result += 1);

  // if (string[i] < 5) {
  //   result += 0;
  // } else if (string[i] >= 5) {
  //   result += 1;
  // }
}
console.log(result);
