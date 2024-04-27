'use strict';
(function (){

    const ulElements = document.getElementById('ulId');
    const attr = document.getElementsByTagName('ul');
    const ulAttributes = Array.from(ulElements.attributes);
    const arrVal = [];
    const arrName = [];
    const lastChild = ulElements.lastElementChild;
    const name = "Alina";
    const firstChild = ulElements.firstElementChild;

    for (const attribute of ulAttributes) {
        arrVal.push(attribute.value);
        arrName.push(attribute.name);
    }

    firstChild.setAttribute('data-my-name', name);

    console.log(arrVal);
    console.log(arrName);
    console.log(lastChild.textContent = "«Привет меня зовут " + name + " »") ;

    ulElements.removeAttribute('data-dog-tail');

})()