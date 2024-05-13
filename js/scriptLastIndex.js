'use strict';

const lastIndexOfFunction = (array, searchElement, fromIndex = array.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
};
export default lastIndexOfFunction;