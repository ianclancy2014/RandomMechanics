"use strict";
//Basic way to calculate how many hours in a day a third
//brother might get to play a gameboy if dad and older brothers
//get gametime priority

console.log("Hello");

// let turnToUseGameboy = Math.floor(Math.random() * 4);
// console.log(turnToUseGameboy);
let fathersTurn = 0;
let oldestBrothersTurn = 0;
let secondBrothersTurn = 0;
let youngestBrothersTurn = 0;

let dadScheduled = true;
let oldestScheduled = true;
let secondScheduled = true;
let youngestScheduled = true;

let i = 0;

while (i < 100) {
  let turnToUseGameboy = Math.floor(Math.random() * 4);
  if (turnToUseGameboy == 0) {
    fathersTurn = fathersTurn + 1;
  } else if (turnToUseGameboy == 1) {
    oldestBrothersTurn = oldestBrothersTurn + 1;
  } else if (turnToUseGameboy == 2) {
    secondBrothersTurn = secondBrothersTurn + 1;
  } else {
    youngestBrothersTurn = youngestBrothersTurn + 1;
  }
  i = i + 1;
}

// while (i < 100) {
//   let turnToUseGameboy = Math.floor(Math.random() * 4);
//   if (turnToUseGameboy == 0) {
//     fathersTurn = fathersTurn + 1;
//   } else if (turnToUseGameboy == 1) {
//     oldestBrothersTurn = oldestBrothersTurn + 1;
//   } else if (turnToUseGameboy == 2) {
//     secondBrothersTurn = secondBrothersTurn + 1;
//   } else {
//     youngestBrothersTurn = youngestBrothersTurn + 1;
//   }
//   i = i + 1;
// }

console.log(
  fathersTurn,
  oldestBrothersTurn,
  secondBrothersTurn,
  youngestBrothersTurn
);
