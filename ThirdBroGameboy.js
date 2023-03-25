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

// let willContinue = true;

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
  let z = Math.floor(Math.random() * 2 + 1);
  if (z == 1) {
    placeholder = false;
    console.log(placeholder);
    return placeholder;
  } else if (z == 2) {
    placeholder = true;
    console.log(placeholder);
    return placeholder;
  }
  return placeholder;
}

function whoWantsToPlay(a, b, c, d) {
  let father = willContinueToPlay(a);
  console.log("the value is now " + father);
  let first = willContinueToPlay(b);
  console.log("the value is now " + first);
  let second = willContinueToPlay(c);
  console.log("the value is now " + second);
  let third = willContinueToPlay(d);
  console.log("the value is now " + third);
  console.log(father, first, second, third);
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

whoWantsToPlay(father, first, second, third);

console.log(
  fathersTurn,
  oldestBrothersTurn,
  secondBrothersTurn,
  youngestBrothersTurn
);

// let k = 10;

// function firstFunction(m) {
//   let z = Math.floor(Math.random() * 2 + 1);
//   if (z === 1) {
//     m = 13;
//     console.log(" got a 1");
//   } else if (z === 2) {
//     m = 15;
//     console.log(" got a 2");
//   }
//   return m;
// }

// let k2 = firstFunction(k);
// console.log(k2);

// //NEED TO STORE THE VARIABLE!
// firstFunction(k);
// console.log(k);
