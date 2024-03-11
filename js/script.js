'use strict';

let a = 2;
let b = 0;

//1
console.log("1. " + (a === 0 ? "Вірно" : "Неправильно"));
//2
console.log("2. " + (a > 0 ? "Вірно" : "Неправильно"));
//3
console.log("3. " + (a < 0 ? "Вірно" : "Неправильно"));
//4
console.log("4. " + (a >= 0 ? "Вірно" : "Неправильно"));
//5
console.log("5. " + (a <= 0 ? "Вірно" : "Неправильно"));
//6
console.log("6. " + (a !== 0 ? "Вірно" : "Неправильно"));
//7
console.log("7. " + (a === "test" ? "Вірно" : "Неправильно"));
//8
console.log("8. " + (a === "1" ? "Вірно" : "Неправильно"));
//9
console.log("9. " + (a > 0 && a < 5 ? "Вірно" : "Неправильно"));
//10
if(a === 0 || a === 2){
    a += 7;
}
else{
    a = a / 10;
}
console.log("Тепер а = " + a);
//11
if (a === 1 || a < 2 && b >= 3){
    console.log("Сумма a + b = " + (a + b));
}
else{
    console.log("Різниця a - b = " + (a - b));
}
//12
console.log("6. " + ((a > 2 && a < 11) || (b >= 6 && b < 14) ? "Вірно" : "Неправильно"));
//13
let num = 1;
let result;

switch (num){
    case 1:
        console.log (result = "зима");
        break;
    case 2:
        console.log (result = "весна");
        break;
    case 3:
        console.log (result = "літо");
        break;
    case 4:
        console.log (result = "осінь");
        break;
    default:
        console.log (result = "Щось тут не так :(");
}
