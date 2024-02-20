"use strict";

// // // 1 завдання

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
  let count = delay;
  let intervalId = setInterval(function () {
    console.log(count);
    count--;
    if (count < 1) {
      clearInterval(intervalId);
      console.log("BOOM");
    }
  }, 1000);
}

// 2 завдання

detonatorTimerRecursion(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimerRecursion(delay) {
  // тут ваш код
  let count = delay;
  setTimeout(function addTime() {
    console.log(count);
    count--;
    if (count >= 1) {
      setTimeout(addTime, 1000);
    } else {
      console.log("BOOM");
    }
  }, 1000);
}
