'use strict';

const includesFunction = (array, searchElement) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
};

export default includesFunction;