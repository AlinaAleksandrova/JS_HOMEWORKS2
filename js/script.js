'use strict';

// bodybuilding - Arnold Schwarzenegger,
// boxing - Oleksandr Usyk,
// basketball - Michael Jeffrey Jordan

const yearOfBirth = +prompt("Ваш рік народження?");
const currentYear = new Date().getFullYear();
const year = currentYear - yearOfBirth;

const city= prompt("В якому місті Ви живете?");
const cityNew= city.toLowerCase();

const sport = prompt("Ваш улюблений вид спорту?");
const sportNew = sport.toLowerCase();

if (yearOfBirth !== null || yearOfBirth !== ""){
    if (city !== null || city !== ""){
        if (sport !== null || sport !== ""){
            alert("Вам зараз скількино рочків: " + year + "\n" +
                "Ви живете в столиці " + getCity((city)) + "\n" +
                "Круто! Хочеш стати як " + getSports((sport)))
        }
        else{
            alert("Шкода, що ви не захотіли ввести ваш улюблений вид спорту.");
        }
    }
    else{
        alert("Шкода, що ви не захотіли вказати дату народження, місто чи вид спорту.");
    }
}
else {
    console.log("Шкода, що ви не захотіли вказати дату народження, місто чи вид спорту.");
}

function getCity(cityNew){
    switch (cityNew) {
        case "Київ":
            return "Украіна";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Англія";
        default:
            return "1";
    }
}
function getSports(sportNew){
    switch (sportNew) {
        case "бодібілдинг":
            return "Арнольд Шварцнеггер";
        case "бокс":
            return "Олександр Усик";
        case "баскетбол":
            return "Майкл Джеффрі Джордан";
        default:
            return "2";
    }
}
