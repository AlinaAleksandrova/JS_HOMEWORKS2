'use strict';

(function (){
    const user ={
        firstName: 'Alina',
        lastName: "Maimeskul"

    }
    const call = function (func, context, arg){
        context.func = func;
        context.func();
        delete context.func;
    }

    const bind = function (func, context, arg){
        return function (){
            return call(func, context, arg);
        }
    }
    const display = function (){
        console.log(this.lastName);
    }

    call(display, user);
    const d = bind(display, user);
    console.log(d);
    d();
})()




