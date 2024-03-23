'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersFunction = function generateKey(length, characters){
    let res = "";
    const charLength = characters.length;
    for(let i = 0; i <= length; i++){
        const index = Math.floor(Math.random() * charLength);
        res = res + characters[index];
    }
    return res;
}

console.log(charactersFunction(16, characters));