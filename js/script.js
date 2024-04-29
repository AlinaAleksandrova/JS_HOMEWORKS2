'use strict';
(function (){
    const person = {
        name: 'Alina',
        phone: '333-333-333',
        email: 'a@gmail.com'
    }
    const info = function (phone, email){
        console.log('Імя ' + this.name + ' Телефон ' + this.phone + ' Email ' + this.email)
    }
    const myApply = function (fn, context, arg){
        context.fn = fn;
        context.fn();
        delete context.fn;
    }
    myApply(info, person, ['333-333-333', 'a@gmail.com'])
})()