'use strict';

//1
const x = 10;
const y = 7;
console.log(x < y ? `x більше за y` : `x не більше, ніж y`);

//2

if (!isNaN(Number(num)) && num !== null && num.trim() !== "") {
    const numLen = num.length;
    if (num < 0) {
        if (numLen - 1 === 1) {
            console.log("Число " + num + " однозначне негативне");
        } else if (numLen - 1 === 2) {
            console.log("Число " + num + " двозначне негативне");
        } else if (numLen - 1 === 3) {
            console.log("Число " + num + " трьохзначне негативне");
        } else
            console.log("Число " + num + " багатозначне негативне");
    } else if (num >= 1) {
        if (numLen === 1) {
            console.log("Число " + num + " однозначне позитивне");
        } else if (numLen === 2) {
            console.log("Число " + num + " двозначне позитивне");
        } else if (numLen === 3) {
            console.log("Число " + num + " трьохзначне позитивне");
        } else
            console.log("Число " + num + " багатозначне позитивне");
    } else {
        console.log("Число " + num);
    }
}else {
    console.log("Будь-ласка, введіть число!");
}


//3
const value1 = +prompt("Введіть перше число: ");
const value2 = +prompt("Введіть друге число: ");
const value3 = +prompt("Введіть третє число: ");

if (value1 !== null && value2 !== null && value3 !== null) {
    if (value1 >= value2 && value1 >= value3) {
        console.log(value1 + " Перше число є максимальним!")
    } else if (value2 >= value1 && value2 >= value3) {
        console.log(value2 + " Друге число є максимальним!")
    } else {
        console.log(value3 + " Третє число є максимальним!")
    }
}
else {
    console.log("Будь-ласка, введіть всі три числа!");
}

//4

const a = prompt("Введіть значення першоі сторони трикутника:");
const b = prompt("Введіть значення другоі сторони трикутника:");
const c = prompt("Введіть значення третьої сторони трикутника:");

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник склався")
}