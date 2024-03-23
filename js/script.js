'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const arrFunction = function takesArray (arr){

    if(arr.length === 0){
        return "Масив порожній";
    }

    const currentPositiveNumber = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            currentPositiveNumber.push(arr[i]);
        }
    }

    if(currentPositiveNumber.length === 0){
        return null;
    }else{
        return currentPositiveNumber;
    }

}
console.log("Новий масив позитивних чисел: " + arrFunction(arr));