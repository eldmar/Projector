"use strict";

// приклад об'єкту
const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

let updatedPriceData = {};

// ваш код

for (let price in priceData) {
  updatedPriceData[price.toLowerCase()] = parseFloat(priceData[price]).toFixed(
    2
  );
}

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
