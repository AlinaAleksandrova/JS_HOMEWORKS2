'use strict';

const degree = prompt("Enter value:");
const unit= prompt("Enter unit of measurement: (C or F)");
console.log(degree + " " + unit);
const celsius =(Number(degree) - 32) / 1.8;
const fahrenheit = Number(degree) * 1.8 + 32;

if (unit === "F" || unit === "f"){
    alert(celsius + " " + "°C");
}
else if(unit === "C" || unit === "c" ){
    alert(fahrenheit + " " + "F");
}
else
    alert("ERROR: You entered an incorrect letter")