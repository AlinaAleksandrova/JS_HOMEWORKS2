'use strict';

//1
const getFactorial = function (num){
   if(num === 1) return 1;
   else return num * getFactorial(num-1);
}
const numFac = 5;

console.log("Факторіал числа " + numFac + " = " + getFactorial(numFac));


//2
const pow = function (num, degree){
   if(degree === 1) return num;
   else return num * pow(num, degree - 1)
}
const num = 2;
const degree = 3;
console.log("Якщо число " + num + " підняти в степінь " + degree + " ,то ми отримаємо = " + pow(num, degree));

//3

const sum = function (a, b){
   if(b === 0) return a;
   else return sum(a + 1, b - 1);
}

const a = 2;
const b = 3;

console.log(a + " + " + b + " = " + sum(a, b));
