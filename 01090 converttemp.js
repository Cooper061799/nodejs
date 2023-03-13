"use strict";

let celsius = process.argv[2];

console.log(celsius);

let fahrenheit = celsius *9/5 +32;

console.log(celsius, "in celsius is", fahrenheit, "Fahrenheit");