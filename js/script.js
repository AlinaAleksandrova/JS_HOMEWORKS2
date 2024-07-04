'use strict';

class Human{
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment{
    residents = [];

    addResident(people){
        if(people instanceof Human){
            this.residents.push(people)
        }else{
            throw new Error('Лише екземпляри Person можна додати як резидентів.');
        }
    }

    getResident(){
        return this.residents;
    }
}

class House{
    apartments = [];
    maxApart;
    constructor(maxApart) {
        this.maxApart = maxApart;
    }

    addApartment(apartment){
        if(apartment instanceof Apartment ){
            if(this.apartments.length < this.maxApart){
                this.apartments.push(apartment);
            }else{
                console.log('Неможливо додати квартиру. Досягнуто максимальної ємності.')
            }
        }else{
            throw new Error("Можна додавати лише екземпляри квартири.");
        }
    }

    getApartments() {
        return this.apartments;
    }
}

const p1 = new Human("Brian", "O’Conner");
const p2 = new Human("Dominic", "Toretto");
const p3 = new Human("Letty", "Ortiz");
const p4 = new Human("Mia", "Toretto");

const apart1 = new Apartment();
const apart2 = new Apartment();
const apart3 = new Apartment();

const house = new House(2);
apart1.addResident(p1);
apart2.addResident(p2);
apart2.addResident(p3);
apart2.addResident(p4);

house.addApartment(apart1);
house.addApartment(apart2);
house.addApartment(apart3);

console.log(house.getApartments());