'use strict';

//1
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= arr[i]; i++){
    sum = sum + arr[i];
}
console.log("Сумма всіх елементів масиву = " + sum);

//2

let sum2 = 0;
for(let i = 0; i < arr.length; i++){
    sum2 = sum2 + Math.pow(arr[i], 2);
}
console.log("Сума квадратів елементів цього масиву = " + sum2);