'use strict';

//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log("1. Новий масив: " + newArr);

//2
const reversed = arr1.reverse();
console.log("2. Зворотній масив: " + reversed);

//3
const arr3 = [1, 2, 3];
const push = arr3.push("4", "5", "6");
console.log("3. Добавили в кінець елементи: " + arr3);

//4
const arr4 = [1, 2, 3];
const unshift = arr4.unshift(4, 5, 6);

console.log("4. Добавили на початок елементи:" + arr4);

//5
const arr5 = ["js","css", "jq"];
console.log("5. Перший елемент масиву: " + arr5[0]);

//6
console.log("6. Останій елемент масиву: " + arr5[arr5.length - 1]);

//7
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.slice(0, 3);
console.log("7. Новий масив:  " + newArr7);

//8
const newArr8 = arr7.slice(3);
console.log("8. Новий масив:  " + newArr8);

//9
const newArr9 = arr7.slice(1, 2);
console.log("9. Новий масив: " + newArr9);

//10
const newArr10 = arr7.slice(1, 4);
console.log("10. Новий масив:  " + newArr10);

//11
const newArr11 = arr7.splice(3, 0, 'a', 'b', 'c');
console.log("11. Новий масив:  " + newArr11);

//12
const array12 = [1, 2, 3, 4, 5];
array12.splice(1, 0, 'a', 'b');
array12.splice(6, 0, 'c');
array12.push('e');
console.log("12. Новий масив:  " + array12);

//13
const arr13 = [3, 4, 1, 2, 7];
console.log("13. Відсортований масив: " + arr13.sort());

//14
const arr14 = [5, 6, 7, 8, 9];
console.log("14. Сума елементів масиву: " + arr14.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

//15
const arr15 = [5, 6, 7, 8, 9];
console.log("15. Масив квадратів чисел масиву: " + arr14.map(num => num * num));

//16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
console.log("16. Масив лише з від'ємними значеннями: " + arr16.filter(num => num < 0));

//17
console.log("17. Масив лише з парними значеннями: " + arr16.filter(num => num > 0));

//18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
console.log("18. Масив де більше 5 знаків: " + arr18.filter(str => str.length > 5));

//19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
console.log("19. Масив де більше 5 знаків: " + arr19.filter(item => Array.isArray(item)));

//20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
console.log("20. Кількість від'ємних елементів в масиві = : " + arr20.filter(num => num < 0).length);








