//1
var user = 'Alina';
var num = 1;
var bool = true;
var n = null;
var undef = undefined;
var people = {
    firstName: "Alina",
    lastName: "Maimeskul",
    age: 29
};
var more = ['string', 10];
var Void = function () {
    console.log("Hi!");
};
var enumeration;
(function (enumeration) {
    enumeration[enumeration["first"] = 1] = "first";
    enumeration[enumeration["second"] = 2] = "second";
    enumeration[enumeration["third"] = 3] = "third";
})(enumeration || (enumeration = {}));
function ErrorFunc(errorMsg) {
    throw new Error(errorMsg);
}
function isError(value) {
    return value instanceof Error;
}
var person = {
    name: 'Alex',
    age: 30,
    hobby: ['sport', 'PS5']
};
console.log(person.name);
console.log(person.age);
console.log(person.hobby);
//3
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 2));
//4
var week;
(function (week) {
    week[week["Monday"] = 0] = "Monday";
    week[week["Tuesday"] = 1] = "Tuesday";
    week[week["Wednesday"] = 2] = "Wednesday";
    week[week["Thursday"] = 3] = "Thursday";
    week[week["Friday"] = 4] = "Friday";
    week[week["Saturday"] = 5] = "Saturday";
    week[week["Sunday"] = 6] = "Sunday";
})(week || (week = {}));
var day = week.Monday;
console.log(day);
