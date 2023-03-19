"use strict";

// function can also be called if greet if function is called above, thisi s called function hoisting
// only works for function definitions
// greet1()
function greet1() {
    console.log("Hello 1");
}

greet1();

// function hoisting does not work here since we are using a function expression
let greet2 = function() {
    console.log("Hello 2");
}

greet2();

// another way of using a function expression
let greet3 = () => {
    console.log("Hello 3");
}

greet3();