'use strict';

const string1 = prompt('Enter the first line:');
const string2 = prompt('Enter the second line:');
const string3 = prompt('Enter the third line:');

console.log('Entered information' + ':' + ' ' + string1 + string2 + string3);
/************/
/************/
/************/

const number = 85172;
const stringNumber = number.toString();
console.log(stringNumber.length);
function reverseString(string) {
    var newString = '';
    for (var i = string.length-1; i >=0; i-- ){
        newString = newString + ' ' + string[i];
    }
    return newString;
}

console.log(reverseString(stringNumber));














//function reverseString(str) {
    // Шаг 1. Создаем строковую переменную, в которую будет помещен результат
  //  var newString = "";

    // Шаг 2. Создаем цикл FOR
    /* Начальной точкой цикла будет (str.length - 1), что соответствует
       последнему символу в строке, т.е. "o"
       Пока i больше или равна 0, цикл будет продолжать работать,
       уменьшая счетчик на каждой итерации */
  //  for (var i = str.length - 1; i >= 0; i--) {
        //newString = newString + ' ' + str[i]; // or newString = newString + str[i];
    //}
    /* Длина строки 'hello' равна 5, поэтому:
        На каждой итерации: i = str.length - 1 and newString = newString + str[i]
        Первая итерация:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Вторая итерация:    i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Третья итерация:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Четвертая итерация: i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Пятая итерация:     i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Конец цикла FOR*/

    // Шаг 3. Возвращаем перевернутую строку
    //return newString; // "olleh"
//}

//console.log(reverseString(stringNumber));