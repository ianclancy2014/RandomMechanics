"use strict";
//Trying to figure out the mechanic of havinf a list, and then
//creating a second list by randomly pulling from the first list
//but having no repeats. This is mainly for the SOtB Network Encounter
//program I'm trying to create but I can't the mechanic down in that
//so I'm going to try to build it here to see how to do it

console.log("Begin IsItInList Program");
let list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let list2 = [];
let numbersToPull = 5;
let insideList = true;
let b = Math.floor(Math.random() * list1.length);

function list2Builder() {
  while (numbersToPull > 0) {
    // let b = Math.floor(Math.random() * list1.length);
    iterator();
    if (insideList == true) {
      list2.push(list1[b]);
    } else {
      numbersToPull = numbersToPull + 1;
    }
    insideList = true;
    b = Math.floor(Math.random() * list1.length);
    numbersToPull = numbersToPull - 1;
    console.log(insideList);
  }
  console.log(list2);
}

let x = 5;
let z = [1, 2, 3, 4, 5];

//Got it, using this logic :)
function iterator() {
  for (let item of list2) {
    if (item == b) {
      insideList = false;
    } else {
      continue;
    }
  }
}

list2Builder();
// iterator();
