'use strict';

(function (){
    const arr = [1,2,3,4,5,6,7,8,9,0];
    const itr = arr[Symbol.iterator]();

    const createArrItr = function (arr){
        let i = 0;
        return{
            next: function (){
                if(i < arr.length){
                    return{value:arr[i++], done: false}
                }
                else{
                    return {value: undefined, done: true}
                }
            }
        }
    }

    Array.prototype[Symbol.iterator] = function (){
        return createArrItr(this);
    }

    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());

})()

