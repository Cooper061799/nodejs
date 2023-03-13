"use strict";

let greeting = 'Hello';
// JS automatically creates a space bewteen hello and john when computing this
// console.log(greeting, 'John');

// argv array uses
// 0: outputs the location of the node you are running
// 1: outputs the location of the script you are running
// 2-->nth: outputs whatever you type after running node commandline.js however IF you dont type anything it outputs 'undefined'
let first = process.argv[2];
let last = process.argv[3];

console.log(greeting, first, last);