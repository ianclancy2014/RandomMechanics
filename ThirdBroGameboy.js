"use strict";
//Basic way to determine how many hours in a day a third
//brother might get to play a gameboy if dad and older brothers
//get gametime priority

//**Future plans: Allowing the user to adjust things like number of people, hours in the day,
// "weight" of priority, and things like that. I'm also going to add something that will run the
// program a large number of times and collect the info, averaging out each user's times so we can
// see how many hours on average each person gets to play in a year, rather than in a single day,
// but the program is done as far as what I set out to make

let fathersTurn = 0;
let oldestBrothersTurn = 0;
let secondBrothersTurn = 0;
let youngestBrothersTurn = 0;

let father = false;
let first = false;
let second = false;
let third = false;

let i = 0;

while (i < 14) {
  whoWantsToPlay(father, first, second, third);
  whoWillPlay();
  i = i + 1;
  // console.log(`Father will play for ${fathersTurn} hours`);
  // console.log(
  //   `Oldest brother will get to play for ${oldestBrothersTurn} hours`
  // );
  // console.log(
  //   `The second brother will get to play for ${secondBrothersTurn} hours`
  // );
  // console.log(
  //   `The third brother will get to play for ${youngestBrothersTurn} hours`
  // );
}

//The willContinueToPlay function determines if the person will
//continue to play
function willContinueToPlay(placeholder) {
  let z = Math.floor(Math.random() * 2 + 1);
  if (z == 1) {
    placeholder = false;
    return placeholder;
  } else if (z == 2) {
    placeholder = true;
    return placeholder;
  }
  return placeholder;
}

//The whoWantsToPlay lists the people who want to play
function whoWantsToPlay(a, b, c, d) {
  father = willContinueToPlay(a);
  first = willContinueToPlay(b);
  second = willContinueToPlay(c);
  third = willContinueToPlay(d);
  return father, first, second, third;
}

//The whoWillPlay function determines who will play based on the list gathered by the
//whoWantsToPlay cunftion.
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

//Prints out the results
console.log(`Father will play for ${fathersTurn} hours`);
console.log(`Oldest brother will get to play for ${oldestBrothersTurn} hours`);
console.log(
  `The second brother will get to play for ${secondBrothersTurn} hours`
);
console.log(
  `The third brother will get to play for ${youngestBrothersTurn} hours`
);
