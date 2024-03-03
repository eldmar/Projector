"use strict";

let headerNavigation = document.getElementById("headerTwo");
console.log("headerNavigation", headerNavigation);

let sectionAboutDOM = document.getElementsByClassName("firstSection");
console.log("firstSection", sectionAboutDOM);

// let listItems = document.querySelectorAll("ul li")[4];
let listItem = document.querySelector("ul li:nth-of-type(5)");
console.log("listItem", listItem);

let hatredLevelBlock = document.getElementsByClassName("hatredLevelBlock")[0];
console.log("hatredLevelBlock", hatredLevelBlock);
