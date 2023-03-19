"use strict";

function square(number) {
    // let square = number * number;
    return number * number;
}

let value = square(7);

console.log(value);

function greet(name) {
    let greeting = 'Hello' + name;
    return greeting;
}

let message = greet('Neptune');
// Does not work since greeting is only defined within the function
// console.log(greeting);
// Does work because message is defined outside of the function
console.log(message)