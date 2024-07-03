'use strict';

(function (){
    const add = (a, b) => a+b;

    const cacheFun = (f) =>{
        const cache = new Map();

        return function (... args){
            const key = JSON.stringify(args);

            if(cache.has(key)){
                return cache.get(key);
            }

            const res = f(...args);

            cache.set(key, res);

            if(cache >10){
                const oldKey = cache.keys().next().value;
                cache.delete(oldKey);
            }
            return res;
        }
    }

    const cacheAdd = cacheFun(add);

    console.log(cacheAdd(1, 2));
    console.log(cacheAdd(1, 2));
    console.log(cacheAdd(3, 4));
    console.log(cacheAdd(1, 2));

})()