'use strict';

//1
const arr = ["a", "b", "c", "d"];
console.log("1. Результат: " + arr[0]+ " + " + arr[1] + " , " + arr[2] + " + " + arr[3]);

//2
const arr2 = [2, 5, 3, 9];
const var1 = arr2[0] * arr2[1];
const var2 = arr2[2] * arr2[3];
const result = var1 + var2;
console.log("2. Результат: " + result);

//3
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log("3. Результат: " + arr3[1][0]);

//4
const obj = {js:["jQuery", "Angular"], php: "hello", css: "world"};
console.log("4. Результат: " + obj.js[0]);

//5
let x = "";
const arr5 = [];
for(let i = 0; i < 5; i++){
    x = x + "x";
    arr5.push(x);
}
console.log("5. Результат: " + arr5);

//6
const arr6 = [];
for(let i = 1;i <= 5; i++){
    arr6.push(String(i).repeat(i));
}
console.log("6. Результат: " + arr6);

//7
const meaning = "x";
const elements = 5;
const arr7 = [];
const arrFunction = function arrayFill(meaning, elements){
    for (let i = 0; i < elements; i++) {
        arr7.push(meaning);
    }
    return arr7;
}
console.log("7. Результат: " + arrFunction(meaning, elements));

//8
const arr8 = [1,2,3,4,5];
let sum8 = 0;
let count = 0;

for(let i = 0; i < arr8.length; i++){
    sum8 = sum8 + arr8[i];
    count++;
    if(sum8 > 10){
        break;
    }
}

console.log("8. Кількість елементів яку треба скласти в масиві щоб отримати > 10 = " + count);

//9
console.log("9. Масив в зворотному виді:")
const arr9 = [1,2,3,4,5];
for(let i = arr9.length - 1; i >= 0; i--){
    console.log(arr9[i] + ' ');
}

//10
let arr10 = [[1, 2, 3], [4, 5], [6]];
let sum10 = 0;
arr10 = arr10.flat(Infinity);
for (let i = 0; i < arr10.length; i++) {
    sum10 = sum10 + arr10[i];
}

console.log("10. Сума всіх елементів масиву = " + sum10);

//11
let arr11 = [[1, 2], [3, 4], [[5, 6], [7, 9]]];
let sum11 = 0;
arr11 = arr11.flat(Infinity);
for (let i = 0; i < arr11.length; i++) {
    sum11 = sum11 + arr11[i];
}

console.log("11. Сума всіх елементів масиву = " + sum11);