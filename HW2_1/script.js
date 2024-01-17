"use strict";

// 1 завдання

let test = 323;

// string
console.log(test.toString());
// number
console.log(+test);
// boolean
console.log(!!test);

// 2 завдання

let rate = 38.5;

let amountUAH = prompt("Вкажіть суму гривень(UAH)");
let amountUSD = amountUAH / rate;

console.log(`${amountUSD.toFixed(3)} USD`);

// 3 завдання

let amountLiters = prompt("Введіть кількість літрів");
let price = prompt("Вкажіть ціну за 1 літр");
let totalCost = (amountLiters * price).toFixed(2);

console.log(totalCost);

// 4 завдання

let a = 10; // може бути будь-яке інше ціле додатнє число
let b = 20; // може бути будь-яке інше ціле додатнє число

let binaryResult = (a + b).toString(2);

console.log(binaryResult, typeof binaryResult); // виведе в консоль бінарне число строкою
