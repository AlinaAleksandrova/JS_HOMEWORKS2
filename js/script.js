'use strict';

const value1 = +prompt("Enter first value:");
const value2 = +prompt("Enter second value:");
const value3 = +prompt("Enter third value:");
const arithmetic = (value1 + value2 + value3) / 3;

if(isNaN(value1)){
    alert("You entered an incorrect number! Try your luck again!");
}
else{
    alert("The arithmetic mean of these numbers: " + value1 + " + " + value2 + " + " + value3 + " = " + " " + arithmetic);
}