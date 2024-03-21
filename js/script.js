'use strict';

//1
let val = "";
for (let i = 10; i <= 20; i++){
    val = val + i + ", ";
}
console.log(val);

//2
let square = 0;
for(let i = 10; i <= 20; i++){
    square = i * i;
}
console.log("Квадрати чисел від 10 до 20 = " + square);

//3
for(let i = 1; i <= 10; i++){
    let num = 7 * i;
    console.log("7" + " * " + i + " = " + num)
}

//4
let sum = 0;
for (let i = 1; i <= 15; i++){
    sum = sum + i;
}
console.log("Сума всіх цілих чисел від 1 до 15 = " + sum);

//5
let product = 1;
for(let i = 15; i <= 35; i++){
    product = product * i;
}
console.log("Добуток усіх цілих чисел від 15 до 35 = " + product);

//6
let arithmeticMean = 1;
for(let i = 1; i <= 500; i++){
    arithmeticMean = (arithmeticMean + i);
}
console.log("Середнє арифметичне всіх цілих чисел від 1 до 500 = " + arithmeticMean / 500);

//7
let sum2 = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        sum2 = sum2 + i;
    }
}
console.log("Сума лише парних чисел в діапазоні від 30 до 80 = " + sum2);

//8
for (let i = 100; i <= 200; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//9
let number = 14;
console.log("Дільники числа " + number + " : ");
for(let i = 0; i <= number; i++){
    if(number % i === 0){
        console.log(i);
    }
}

//10
let counter = 0;
for(let i = 0; i <= number; i++){
    if(number % i === 0 && i % 2 == 0){
        counter++;
    }
}
console.log("Кількість його парних дільників = " + counter);

//11
let sum3 = 0;
for(let i = 0; i <= number; i++){
    if(number % i === 0 && i % 2 == 0){
        sum3 = sum3 + i;
    }
}
console.log("Сума його парних дільників = " + sum3);

//12
console.log("Таблицю множення від 1 до 10: ");
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        let product;
        product = i * j;
        console.log(i + " * " + j + " = " + product);
    }
}