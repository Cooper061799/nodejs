"use strict";

console.log(Math.PI);

let pi = 1;
let denominator = 1;
let numerator = 1;

while(Math.abs(pi*4 - Math.PI) > .0001) {
    denominator += 2;
    numerator *= -1;
    pi += numerator/denominator;
    console.log(pi*4);
}