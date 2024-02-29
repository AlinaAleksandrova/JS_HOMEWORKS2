'use strict';

const a = prompt("Enter the first value:");
const b = prompt("Enter the second value:");

const addition = Number(a) + Number(b);
const subtraction = Number(a) - Number(b);
const multiplication = Number(a) * Number(b);
const division = Number(a) / Number(b);

console.log("Result:" + " " + a + " + " + b + " " + "=" + " " + addition );
console.log("Result:" + " " + a + " - " + b + " " + "=" + " " + subtraction );
console.log("Result:" + " " + a + " * " + b + " " + "=" + " " + multiplication );
console.log("Result:" + " " + a + " / " + b + " " + "=" + " " + division );