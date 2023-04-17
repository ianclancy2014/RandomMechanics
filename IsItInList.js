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

function list2Builder() {
  //   let a = Math.floor(Math.random() * list1.length);
  //   console.log(a);
  while (numbersToPull > 0) {
    let b = Math.floor(Math.random() * list1.length);
    console.log(list1[b]);
    list2.push(list1[b]);
    numbersToPull = numbersToPull - 1;
  }
  console.log(list2);
}

list2Builder();
