'use strict';

const number = +prompt("Введіть будь-ласка число: ");

if(number < 1 || isNaN(number)){
    console.log(NaN)
}else{
    let divider = NaN;

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            divider = i;
            break;
        }else if(i === number){
            console.log("Число просте");
        }
    }
    if (isNaN(divider)) {
        console.log("Число " + number + " є простим");
    } else {
        console.log("Мінімальний дільник числа " + number + " - це число " + divider);
    }
}