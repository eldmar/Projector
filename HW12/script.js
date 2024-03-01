"use strict";

let headerNavigation = document.getElementById("headerTwo");
console.log("headerNavigation", headerNavigation);

let sectionAboutDOM = document.getElementsByClassName("firstSection");
console.log("firstSection", sectionAboutDOM);

let listItems = document.querySelectorAll("ul li");
let listItem;

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].textContent === "Пункт 5") {
    listItem = listItems[i];
    break;
  }
}
console.log("listItem", listItem);

let hatredLevelBlock = document.getElementsByClassName("hatredLevelBlock")[0];
console.log("hatredLevelBlock", hatredLevelBlock);
