"use strict";

// 1 завдання

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

console.log([...movies].sort(byProperty("releaseYear", ">")));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log([...movies].sort(byProperty("runningTimeInMinutes", "<")));
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log([...movies].sort(byProperty("movieName", ">")));
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  // тут ваш код
  if (direction === "<") {
    return (a, b) => (a[property] < b[property] ? 1 : -1);
  } else if (direction === ">") {
    return (a, b) => (a[property] > b[property] ? 1 : -1);
  }
}

// 2 завдання

function greet(name) {
  return `Hello, ${name}`;
}

function slower(func, seconds) {
  // тут ваш код для декоратора
  return function (...args) {
    let duration = seconds * 1000;
    console.log(`Chill out, you will get you result in ${seconds} seconds.`);
    setTimeout(() => {
      const result = func.apply(this, args);
      console.log(result);
    }, duration);
  };
}

let slowedSomeFunction = slower(greet, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction("John"); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'
