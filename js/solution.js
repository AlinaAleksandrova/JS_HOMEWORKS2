'use strict';
(function () {

    const ulElement = document.getElementById('ulId');
    console.log(ulElement);

    let counter = 0;

    const listElements = (elem) => {
        const list = elem.children;

        for(const lists of list){
            listElements(lists);
            counter++;
        }
    }

    listElements(ulElement);

    console.log("Загальна кількість елементів: " + counter);

    const liElem = document.getElementsByTagName('li');
    const arr = [];

    for(const li of liElem){
        const text = li.textContent;
        arr.push(text)
    }
    console.log(arr);

})();