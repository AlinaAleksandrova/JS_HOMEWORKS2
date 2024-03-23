'use strict';

const sym = "*";
const stringFunction = function padString(str, num, sym, bool = true) {
    if (str === '') {
        return "Ви не ввели строку.";
    } else if (isNaN(num) || num === "" || typeof num === "string" ) {
        return "Ви не ввели число.";
    } else if (sym.length !== 1) {
        return "Ви не ввели символ";
    } else if (typeof bool !== "boolean") {
        return "Ви не ввели true або false.";
    }

    if (str.length > num){
        return str.substring(0, num);
    }

    const minus = num - str.length;
    const addSym = sym.repeat(minus);

    if (bool) {
        return str + addSym;
    } else {
        return addSym + str;
    }
}

console.log(stringFunction("hello", 7, sym, false));