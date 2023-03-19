"use strict";

// \n creates a new line and \t tabs out the values
console.log('Hi\nHi');
console.log('Hello\tHello');
console.log('apple\torange\tbanana');
console.log('cat\tgog\tmouse');

// Writes to the console but does not create a new line with space like console.log does
process.stdout.write('lion');
process.stdout.write('tiger');

let value = 7;

// receive and error because process.stdout.write does not accept numeric data types
process.stdout.write(value);
// do not receive an error because we've converted numeric to string
process.stdout.write(value.toString());