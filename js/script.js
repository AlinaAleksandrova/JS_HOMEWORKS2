'use strict';

const question = prompt("What operation do you want to perform: add, sub, mult, div");
const questionLowerCase = question.toLowerCase();
const value1 = +prompt("Enter first value:");
const value2 = +prompt("Enter second value:");
const add = value1 + value2;
const sub = value1 - value2;
const mult = value1 * value2;
const div = value1 / value2;


if (isNaN(value1)){
    alert("It's not a number :( Try again.")
}
else {
    switch (questionLowerCase){
        case "add": {
            alert("Result: " + value1 + " + " + value2 + " = " + add);
            break;
        }
        case "sub": {
            alert("Result: " + value1 + " - " + value2 + " = " + sub);
            break;
        }
        case "mult": {
            alert("Result: " + value1 + " * " + value2 + " = " + mult);
            break;
        }
        case "div":{
            alert("Result: " + value1 + " / " + value2 + " = " + div );
            break;
        }
        default:
            alert("Enter the correct action");
            break;
    }
}