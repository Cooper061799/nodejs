"use strict";

let fruits = [];

fruits[0] = "orange";
fruits[1] = "apple";
// push adds an element to the end of an array
fruits.push("banana");

console.log(fruits.length);
console.log(fruits[0]);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let animals = [];

// The following lines of code are treated as their own vectors, containing 2 vectors of length 3
animals.push(['dog', 'cat', 'mouse']);
animals.push(['tiger', 'lion', 'elephant']);

// The following lines of code add these elements onto a continuous vector of length 6
// animals.push('dog', 'cat', 'mouse');
//animals.push('tiger', 'lion', 'elephant');

for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// length of this is 2 because it is counting the vectors in animals, not all the elements
console.log(animals.length);