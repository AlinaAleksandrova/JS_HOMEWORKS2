'use strict';

const a = prompt("Enter the first value:");
const b = prompt("Enter the second value:");

const addition = Number(a) + Number(b);
const subtraction = Number(a) - Number(b);
const multiplication = Number(a) * Number(b);
const division = Number(a) / Number(b);

console.log("Rezalt:" + " " + a + " + " + b + " " + "=" + " " + addition );
console.log("Rezalt:" + " " + a + " - " + b + " " + "=" + " " + subtraction );
console.log("Rezalt:" + " " + a + " * " + b + " " + "=" + " " + multiplication );
console.log("Rezalt:" + " " + a + " / " + b + " " + "=" + " " + division );