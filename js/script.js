'use strict';

(function (){
    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }

    const deepFreeze = function (data){
        let propName = Object.getOwnPropertyNames(data);

        propName.forEach(function (name){
            let prop = data[name];
            if(typeof prop == 'object' && prop !== null) deepFreeze(prop)
        })
        return Object.freeze(data);
    }

    deepFreeze(user);

    try {
        user.data.a = 42;
    } catch (e) {
        console.log('Неможливо змінити заморожений об`єкт', e);
    }

    console.log(user);
})()