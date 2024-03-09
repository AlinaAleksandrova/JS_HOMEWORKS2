'use strict';

// bodybuilding - Arnold Schwarzenegger,
// boxing - Oleksandr Usyk,
// basketball - Michael Jeffrey Jordan

const yearOfBirth = +prompt("What year were you born?");
const currentYear = new Date().getFullYear();
const year = currentYear - yearOfBirth;

const city= prompt("In which city do you live?");
//const cityNew= city.toLowerCase();

const sport = prompt("Your favorite sport?");
//const sportNew = sport.toLowerCase();

if (yearOfBirth !== null || yearOfBirth !== ""){
    if (city !== null || city !== ""){
        if (sport !== null || sport !== ""){
            alert("Your age: " + year + "\n" + "You live in the capital " + getCity((city)) + "\n" + "Cool! Do you want to become " + getSports((sport)))
        }
        else{
            alert("Шкода, що ви не захотіли ввести ваш улюблений вид спорту.");
        }
    }
    else{
        alert("It is a pity that you did not want to enter your date of birth, city or sport.");
    }
   /* if (city === "kyiv" || city === "washington" || city === "london") {
        if (sport ==="bodybuilding" || sport ==="boxing" || sport ==="basketball"){
            alert("Your age: " + year + "\n" + "You live in the capital " + getCity((city)) + "\n" + "Cool! Do you want to become " + getSports((sport)))
        }
        else{
            alert("Your age: " + year + "\n" + "You live in the capital " + getCity((city)) + "\n" + "Cool! Everything will work out for you!")
        }
    } else {
        alert("Your age: " + year + "\n" + "You live in the city " + city + "\n" + "Cool! Everything will work out for you!")
    }*/
}
else {
    console.log("It is a pity that you did not want to enter your date of birth, city or sport.");
}

function getCity(city){
    switch (city) {
        case "kyiv":
            return "Ukraine";
        case "washington":
            return "USA";
        case "london":
            return "England";
        default:
            return "";
    }
}
function getSports(sportNew){
    switch (sportNew) {
        case "bodybuilding":
            return "Arnold Schwarzenegger";
        case "boxing":
            return "Oleksandr Usyk";
        case "basketball":
            return "Michael Jeffrey Jordan";
        default:
            return "";
    }
}



/*if(yearOfBirth !== null || yearOfBirth !== ""){
    console.log("You entered incorrect data");
    console.log("Your age: " + year);
}
else{
    console.log("It is a pity that you did not want to enter your date of birth, city or sport.");
}
/*else{
    if (city == "Kyiv" || city == "Київ" ){
        console.log("Your age: " + year);
        console.log("You live in the capital Ukraine.");
    }
    else if (city == "Washington" || city == "Вашингтон"){
        console.log("Your age: " + year);
        console.log("You live in the capital USA.");
    }
    else if (city == "London" || city == "Лондон"){
        console.log("Your age: " + year);
        console.log("You live in the capital England.");
    }
    else {
        console.log("Your age: " + year);
        console.log("You live in a city " + city);
    }
}



/*if (sport == "bodybuilding" || sport == "Bodybuilding"){
    console.log("Cool! Do you want to become Arnold Schwarzenegger?")
}
else if(sport == "boks" || sport == "Boks"){
    console.log("Cool! Do you want to become Oleksandr Usyk?")
}
else if(sport == "basketball" || sport == "Basketball"){
    console.log("Cool! Do you want to become Michael Jeffrey Jordan?")
}
*/











