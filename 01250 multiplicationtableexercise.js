"use strict";

// goal: create a 2 dimensional array of a multiplication table
// table should contain 100 elements 10x10
// print 2 dimensional array in proper format in console log

let rows = 10;
let columns = 10;
let table = [];
let value = 0;
for(let i = 0; i < rows; i++) {
    let row = []
    for(let j = 0; j < columns; j++) {
        value = (i+1)*(j+1);
        // row.push(value);
        row[j] = (i+1)*(j+1);
        process.stdout.write(value.toString());
        process.stdout.write('\t');
    }
    process.stdout.write('\n');
    // table.push(row);
    table[i] = row;
}