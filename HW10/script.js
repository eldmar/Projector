"use strict";

// 1 завдання

function durationBetweenDates(
  startDate = "31 Dec 2012",
  endDate = "31 Dec 2013",
  dimension = "days"
) {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);

  let duration = Math.abs(secondDate - firstDate);

  switch (dimension) {
    case "days":
      return `${duration / 86400000} ${dimension}`;
    case "hours":
      return `${duration / 360000} ${dimension}`;
    case "minutes":
      return `${duration / 60000} ${dimension}`;
    case "seconds":
      return `${duration / 1000} ${dimension}`;
    default:
      return "Invalid dimension";
  }
}

console.log(durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds")); // поверне '86400 seconds'
console.log(durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days")); // поверне '362 days'

// 2 завдання

const userNames = [
  "Петро",
  "Емма",
  "Петро",
  "Емма",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
  "Емма",
];

function filterUnique(array) {
  // тут ваш код
  return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
