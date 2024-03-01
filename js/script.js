'use strict';

// Задача 1
let user = {};
let user = {
    name: "John",
    surname: "Smith"
};
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

// Задача 2

//Об'єкт який оголошений через const може бути змінений.
//Код буде працювати, так як const не дозволяє змінювати тільки саму змінну назву об'єкта, а не іі зміст.
//const видасть помилку лише якщо ми надамо змінній інше значення: user=....

//Задача 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const sum = salaries.John + salaries.Ann + salaries.Pete;

console.log("Salary of all employees" + " " + sum);

