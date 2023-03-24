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

let father = true;
let first = true;
let second = true;
let third = true;

let willContinue = true;

let i = 0;

// while (i < 14) {
//   let turnToUseGameboy = Math.floor(Math.random() * 4); //decides who the next player will be
//   if (turnToUseGameboy <= 3 && ) {
//     fathersTurn = fathersTurn + 1;
//   } else if (turnToUseGameboy == 1) {
//     oldestBrothersTurn = oldestBrothersTurn + 1;
//   } else if (turnToUseGameboy == 2) {
//     secondBrothersTurn = secondBrothersTurn + 1;
//   } else {
//     youngestBrothersTurn = youngestBrothersTurn + 1;
//   }
//   i = i + 1;
//   let oldTurn = turnToUseGameboy;
//   willContinueToPlay();
// }

function willContinueToPlay(placeholder) {
  let z = Math.floor(Math.random() * 2);
  if (z == 0) {
    placeholder = false;
    console.log(placeholder);
  } else if (z == 1) {
    placeholder = true;
    console.log(placeholder);
  }
}

function whoWantsToPlay() {
  willContinueToPlay(father);
  willContinueToPlay(first);
  willContinueToPlay(second);
  willContinueToPlay(third);
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

console.log(whoWantsToPlay());

console.log(
  fathersTurn,
  oldestBrothersTurn,
  secondBrothersTurn,
  youngestBrothersTurn
);
