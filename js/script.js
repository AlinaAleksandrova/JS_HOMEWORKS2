'use strict';

//1
for(let i = 20; i <= 30; i+= 0.5){
    console.log(i + " ")
}

//2

const exchangeRate = 27;
for(let i = 10; i <= 100; i+= 10){
    let cost = i * exchangeRate;
    console.log(i + " доларів = " + cost + " гривнів");
}

//3
const number = 150;
console.log("Всі цілі числа від 1 до 100, квадрат яких не перевищує числа " + number);
for(let i = 1; i <= 100; i++){
    let square = i * i;
    if(square <= number){
        console.log(i)
    }
    else break;
}

//4
function primeNumber(num){
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const num = 153;
if (primeNumber(num)) {
    console.log("Число " + num + " є простим числом.");
} else {
    console.log("Число " + num + " не є простим числом.");
}
//5
const num2 = 81;

for(let i = 1;; i++){
    const calc = 3 ** i;

    if(calc > num2){
        console.log("Не можу знайти число:(");
        break;
    }

    if(calc === num2){
        console.log("Результат: " + calc);
        break;
    }
}






/*const num2 = 3;
let divisibleByThree = 1;

while (divisibleByThree < num2){
    divisibleByThree = divisibleByThree * 3;
    if(divisibleByThree === num2){
        console.log("Число можна отримати шляхом зведення числа 3 у деякий ступінь " + num2);
        break;
    }
}
if(divisibleByThree !== num2){
    console.log("Число НЕ можна отримати шляхом зведення числа 3 у деякий ступінь " + num2);
}*/