### Homework #30

Даний масив чисел const arr = [1, 2, 3, -1, -2, -3];

Потрібно написати функцію, яка поверне новий масив, що містить лише позитивні числа. Для цього:

1. творюємо функцію з довільною назвою.
2. Функція приймає масив як параметр.
3. В тілі функції створюємо порожній масив (приклад: const exampleArr = []).
4. Якщо масив, переданий як параметр у функцію, є порожнім, то повертаємо відповідне повідомлення.
5. Перебираємо циклом масив, який передано як параметр (використовуємо цикл for).
6. В тілі циклу перевіряємо, чи є поточний елемент позитивним числом чи від'ємним (if).
7. Якщо число позитивне, то додаємо його до раніше створеного масиву за допомогою функції push 
8. (приклад exampleArr.push(currentPositiveNumber)).
8. Після виконання циклу перевіряємо масив, який наповнили лише позитивними значеннями.
9. Якщо він не є порожнім, то повертаємо цей масив.
10. Якщо він порожній, повертаємо null.

P.S. Можна написати додаткову функцію для перевірки даних (за бажанням).