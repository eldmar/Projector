"use strict";

// 1 завдання

function durationBetweenDates(
  date1 = "31 Dec 2012",
  date2 = "31 Dec 2013",
  dimension = "days"
) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  //   const timestampDate1 = firstDate.getTime();
  //   const timestampDate2 = secondDate.getTime();
  let duration = Math.abs(secondDate - firstDate);
  if (dimension === "seconds") {
    return console.log(`${duration / 1000} seconds`);
  } else if (dimension === "minutes") {
    return console.log(`${duration / 60000} minutes`);
  } else if (dimension === "hours") {
    return console.log(`${duration / 360000} hours`);
  } else if (dimension === "days") {
    return console.log(`${duration / 86400000} days`);
  }
}

durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds"); // поверне '86400 seconds'
durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days"); // поверне '362 days'

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
