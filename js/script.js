'use strict';

const value1 = prompt("Enter first value:");
const value2 = prompt("Enter second value:");
const sum = Number(value1) + Number(value2);
const sub = Number(value1) - Number(value2);
const mult = Number(value1) * Number(value2);
const div = Number(value1) / Number(value2);

if (isNaN(value1)){
    alert("You entered an incorrect number! Try your luck again!");
}
else{
    alert(`The user entered ${value1} and ${value2}: 
    \n ${value1} + ${value2} = ${sum} 
    \n ${value1} - ${value2} = ${sub}
    \n ${value1} * ${value2} = ${mult}
    \n ${value1} / ${value2} = ${div}
    `);
}