"use strict";
//Basic way to calculate how many hours in a day a third
//brother might get to play a gameboy if dad and older brothers
//get gametime priority

// let turnToUseGameboy = Math.floor(Math.random() * 4);
// console.log(turnToUseGameboy);
let fathersTurn = 0;
let oldestBrothersTurn = 0;
let secondBrothersTurn = 0;
let youngestBrothersTurn = 0;

let father = false;
let first = false;
let second = false;
let third = false;

// let willContinue = true;

let i = 0;

while (i < 14) {
  whoWantsToPlay(father, first, second, third);
  console.log(father, first, second, third);
  whoWillPlay();
  i = i + 1;
  console.log(fathersTurn);
  console.log(oldestBrothersTurn);
  console.log(secondBrothersTurn);
  console.log(youngestBrothersTurn);
}

//The willContinueToPlay function determines if the person will
//continue to play
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

//The whoWantsToPlay lists the people who want to play
function whoWantsToPlay(a, b, c, d) {
  father = willContinueToPlay(a);
  console.log("the value is now " + father);
  first = willContinueToPlay(b);
  console.log("the value is now " + first);
  second = willContinueToPlay(c);
  console.log("the value is now " + second);
  third = willContinueToPlay(d);
  console.log("the value is now " + third);
  console.log(father, first, second, third);
  return father, first, second, third;
}

//The whoWillPlay function determines who will play based on the list gathered by the
//whoWantsToPlay cunftion. NOTE: This function may have to be used in the same
//scope as the whoWantsToPlay function, but I'm not too sure abou that yet

//Probably gonna have to tinker with this one. I need to make sure the numbers
//for the individual people don't go up if they don't have priority even if they still
//check true
function whoWillPlay() {
  if (father == true) {
    fathersTurn = fathersTurn + 1;
    return fathersTurn;
  } else if (first == true) {
    oldestBrothersTurn = oldestBrothersTurn + 1;
    return oldestBrothersTurn;
  } else if (second == true) {
    secondBrothersTurn = secondBrothersTurn + 1;
    return secondBrothersTurn;
  } else if (third == true) {
    youngestBrothersTurn = youngestBrothersTurn + 1;
    return youngestBrothersTurn;
  }
}

// console.log();

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

// whoWantsToPlay(father, first, second, third);

// console.log(
//   fathersTurn,
//   oldestBrothersTurn,
//   secondBrothersTurn,
//   youngestBrothersTurn
// );

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
