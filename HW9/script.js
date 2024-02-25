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

// 3 завдання

let me = {
  name: "Iaroslav",
  residency: "Kyiv",
  age: 34,
  pet: "cat",
  petName: "Leo",

  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
  },
  petIntoduce() {
    console.log(`Also i have a ${this.pet} and his name ${this.petName}`);
  },
};

me.introduce();
me.prognose();
me.petIntoduce();

// 4 завдання

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfPetIntroduce = me.petIntoduce.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfPetIntroduce, 3000); // виведе коректний результат
