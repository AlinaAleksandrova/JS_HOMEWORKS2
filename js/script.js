'use strict';

// bodybuilding - Arnold Schwarzenegger,
// boxing - Oleksandr Usyk,
// basketball - Michael Jeffrey Jordan
// Запитуємо рік народження користувача
let birthYear = prompt("Введіть ваш рік народження:");
let city = prompt("В якому місті ви живете?");
let sport = prompt("Який ваш улюблений вид спорту?");

if (birthYear !== null && birthYear !== "") {
    if (city !== null && city !== "") {
        if (sport !== null && sport !== "") {
            let currentYear = new Date().getFullYear();
            let age = currentYear - parseInt(birthYear);
            let message = "Ваш вік: " + age + " років.\n";

            if (city.toLowerCase() === "київ" || city.toLowerCase() === "вашингтон" || city.toLowerCase() === "лондон") {
                message = message +  "Ти живеш у столиці " + getCity(city) + ".\n";
            } else {
                message = message +  "Ти живеш у місті " + city + ".\n";
            }

            if (sport.toLowerCase() === "бодібілдинг") {
                message = message + "Круто! Хочеш стати " + getSport("футбол") + "?";
            } else if (sport.toLowerCase() === "бокс") {
                message = message + "Круто! Хочеш стати " + getSport("теніс") + "?";
            } else if (sport.toLowerCase() === "баскетбол") {
                message = message + "Круто! Хочеш стати " + getSport("баскетбол") + "?";
            } else {
                message = message + "Це цікавий вид спорту!";
            }

            alert(message);
        } else {
            alert("Шкода, що ви не захотіли ввести ваш улюблений вид спорту.");
        }
    } else {
        alert("Шкода, що ви не захотіли ввести ваше місто.");
    }
} else {
    alert("Шкода, що ви не захотіли ввести ваш рік народження.");
}

function getCity(city) {
    switch (city.toLowerCase()) {
        case "київ":
            return "України";
        case "вашингтон":
            return "США";
        case "лондон":
            return "Великої Британії";
        default:
            return "";
    }
}

function getSport(sport) {
    switch (sport.toLowerCase()) {
        case "бодібілдинг":
            return "Арнольд Шварцнеггер";
        case "бокс":
            return "Олександр Усик";
        case "баскетбол":
            return "Майкл Джеффрі Джордан";
        default:
            return "";
    }
}
