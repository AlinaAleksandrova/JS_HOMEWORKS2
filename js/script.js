'use strict';

const generateList = (array) => {
    const ul = document.createElement('ul');
    for(let item of array){

        const li = document.createElement('li');

        if(Array.isArray(item)){
            li.appendChild(generateList(item));
        }else{
            li.textContent = item
        }
        ul.appendChild(li)
    }
    return ul;
}

const arr = [1,2, [1.1,1.2,1.3] ,3];
const list = generateList(arr);
document.body.appendChild(list);