'use strict';


const bind = function(context) {
    const variable = this;
    const arr = [];
    for (let i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return function() {
        const variable2 = [];
        for (let i = 0; i < arguments.length; i++) {
            variable2.push(arguments[i]);
        }
        const allArr = args.concat(funcArgs);
        const res = variable(...allArgs);
        return res;
    };
};

console.log(bind)




