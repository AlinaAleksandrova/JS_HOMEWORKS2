//1
const user: string = 'Alina';
const num: number = 1;
const bool: boolean = true;
const n: null = null;
const undef: undefined = undefined;

const people: {firstName: string, lastName: string, age: number } = {
    firstName: "Alina",
    lastName: "Maimeskul",
    age: 29
}
let more: any = ['string', 10];
const Void = (): void => {
    console.log("Hi!");
}
enum enumeration {
    first =  1,
    second,
    third
}

function ErrorFunc(errorMsg: string): never {
    throw new Error(errorMsg);
}

function isError(value: unknown): boolean {
    return value instanceof Error;
}

//2

interface Person{
    name: string,
    age: number,
    hobby:string[]
}

const person:Person = {
    name: 'Alex',
    age: 30,
    hobby:['sport', 'PS5']
}
console.log(person.name);
console.log(person.age);
console.log(person.hobby);

//3

const sum = (a: number, b: number) =>{
    return a + b;
}
console.log(sum(2,2));

//4
enum week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const day: week = week.Monday;
console.log(day)