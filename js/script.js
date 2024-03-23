'use strict';

const number = +prompt("Введіть будь-ласка число яка хочете хочете піднести в ступінь: ");
const degree = +prompt("Введіть будь-ласка СТУПІНЬ в яку хочете піднести число: ");
const advancementInDegree = function isDegree(number, degree = 1){
    const degreeMath = number ** degree;
    if (isNaN(number) && isNaN(degree) || isNaN(number) || isNaN(degree)){
        return "Ви ввели не числа. Спробуйте ще раз!";
    }
    else{
        return degreeMath;
    }
}
const res = advancementInDegree(number, degree);
alert("Якщо число " + number + " піднести в ступінь " + degree + " то результат буде = " + res);