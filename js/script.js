'use strict';

//indexOf
const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(arr.indexOf(0));

const indexOfFunction = function (str, searchVal){
    for(let i = 0; i <= str.length; i++){
        if(str[i]=== searchVal){
            return i;
        }
    }
    return -1;
}
console.log("Реалізація методу indexOf: " + indexOfFunction(arr, 0));


//****************************************************************************
//****************************************************************************


//lastIndexOf
const arr2 = ["a", "b", "c", "a", "b" , "c", "a"];
console.log(arr2);
console.log(arr2.lastIndexOf("c"));

const lastIndexOfFunction = function (str, searchVal){
    for(let i = arr2.length - 1; i >= 0; i--){
        if(str[i]=== searchVal){
            return i;
        }
    }
    return -1;
}
console.log("Реалізація методу lastIndexOf: " + lastIndexOfFunction(arr2, "c"));

//****************************************************************************
//****************************************************************************


//find
const arr3 = [1,2,3,4,5];
console.log(arr3);
const found = arr3.find(function (element) {
    return element % 2 === 0;
});
console.log(found);

const findFunction = function (arr,  callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i , arr)){
            return arr[i];
        }
    }
    return undefined;
}
const pairedNumbers = function (num){
    return num % 2 === 0;
}

const res = findFunction(arr3, pairedNumbers);
console.log("Реалізація методу find: " + res);


//****************************************************************************
//****************************************************************************


//findIndex
const arr4=[4, 6, 8, 12, 11];
console.log(arr4);
const isOdd = function (element, index, array) {
    return element % 2 === 1;
}

console.log(arr4.findIndex(isOdd));
const findIndexFunction = function (arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i , arr)){
            return i;
        }
    }
    return -1;
}

const dividedRemainder = function (num){
    return num % 2 === 1;
}
const res2 = findIndexFunction(arr4, dividedRemainder);
console.log("Реалізація методу findIndex: " + res2);


//****************************************************************************
//****************************************************************************

//includes
const arr5 = [1, 2, 3];
console.log(arr5);
console.log(arr5.includes(0));

const includesFunction = function (arr, searchElem){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === searchElem ) {
            return true;
        }
    }
    return  false;
}

console.log("Реалізація методу includes: " + includesFunction(arr5, 0));


//****************************************************************************
//****************************************************************************

//every
const arr6 = [32, 33, 16, 40];
console.log(arr6);
const  checkAge = function (age) {
    return age > 18;
}
console.log(arr6.every(checkAge));

const everyFunction = function (arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}

const ageFunction = function (num){
    return num > 18;
}
console.log("Реалізація методу every: " + everyFunction(arr6, ageFunction));


//****************************************************************************
//****************************************************************************

//some
const arr7 = [3, 10, 18, 20];
console.log(arr7)
const checkAdult = function (age) {
    return age > 18;
}
console.log(arr7.some(checkAdult));

const someFunction = function (arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}
 const newCheckAdult = function (age){
    return age > 18;
 }
console.log("Реалізація методу some: " + someFunction(arr7, newCheckAdult));


//****************************************************************************
//****************************************************************************

//reduce
const money = [29, 41, 46];
const sum = money.reduce( function(total, amount){
    return total + amount;
});

console.log(sum);

const reduceFunction = function (arr, callback){
    let accumulator = 0;
    for(let i =0; i < arr.length; i++){
        if(accumulator === undefined){
            accumulator = arr[i];
        }else{
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }
    return accumulator;
}

const sumFunction = function (accum, curVal){
    return accum + curVal;
}

console.log("Реалізація методу some: " + reduceFunction(money, sumFunction));







