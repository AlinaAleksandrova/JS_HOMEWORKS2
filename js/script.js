'use strict';

let sum = 0
outerLoop:for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        continue;
    }
    sum = sum + i;
    if (i === 19) {
        break outerLoop;
    }
}
console.log("Сумма непарних чисел = " + sum);
