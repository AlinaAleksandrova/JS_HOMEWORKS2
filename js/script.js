'use strict';

const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(arr.indexOf(0));

const indexOfFunction = (array, searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
};
console.log("Реалізація методу indexOf: " + indexOfFunction(arr, 0));


export default indexOfFunction;
