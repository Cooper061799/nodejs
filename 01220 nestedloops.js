"use strict";

let animalTable = [
    ['dog' , 'cat'],
    ['giraffe', 'elephant', 'rhino']
];

for(let i = 0; i < animalTable.length; i++) {
    let row = animalTable[i];

    for(let j = 0; j < row.length; j++) {
        console.log(i, j, row[j]);
    }
}