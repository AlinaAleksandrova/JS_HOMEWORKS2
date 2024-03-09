'use strict';

const year = prompt("Скільки Вам років?");

if (!isNaN(Number(year)) && year !== null && year.trim() !== "") {
    const newYear = Number(year);
    switch (true) {
        case newYear < 0: {
            alert("Тут щось не так! Ви допустили помилку!");
            break;
        }
        case newYear === 0: {
            alert("Вітаю! Ви тільки но почнете пізнавати - це бридотне життя! ");
            break;
        }
        case newYear === 1 || newYear === 21 || newYear === 31 || newYear === 41 || newYear === 51 || newYear === 61 || newYear === 71 || newYear === 81 || newYear === 91: {
            alert(year + " рік");
            break;
        }
        case newYear >= 2 && newYear <= 4 || newYear >= 22 && newYear <= 24 || newYear >= 32 && newYear <= 34 || newYear >= 42 && newYear <= 44 || newYear >= 52 && newYear <= 54 || newYear >= 62 && newYear <= 64 || newYear >= 72 && newYear <= 74 || newYear >= 82 && newYear <= 84 || newYear >= 92 && newYear <= 94: {
            alert(year + " роки");
            break;
        }
        case newYear >= 5 && newYear <= 20 || newYear >= 25 && newYear <= 30 || newYear >= 35 && newYear <= 40 || newYear >= 45 && newYear <= 50 || newYear >= 55 && newYear <= 60 || newYear >= 65 && newYear <= 70 || newYear >= 75 && newYear <= 80 || newYear >= 85 && newYear <= 90 || newYear >= 95 && newYear <= 99: {
            alert(year + " років");
            break;
        }
        default:{
            alert("Ви уже дуже старі! Вам час на покой!")
        }
    }
}
else {
    alert("Будь-ласка, введіть число!");
}


