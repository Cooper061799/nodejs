"use strict";

// Calculate factorials of a number

// function definition
function factorial(value) {
    let sum = 1;
    for(let n = 2; n <= value; n++) {
        sum = sum * n;
    }
    return sum;
}

let result1 = factorial(5);
console.log(result1);

// function expression
let factorial2 = function(value) {
    let sum = 1;
    for(let n = 2; n <= value; n++) {
        sum = sum * n;
    }
    return sum;
}

let result2 = factorial2(5);
console.log(result2);

console.log(factorial2(4));

// function expression alternate
let factorial3 = (value) => {
    let sum = 1;
    for(let n = 2; n <= value; n++) {
        sum = sum * n;
    }
    return sum;
}

console.log(factorial3(6));