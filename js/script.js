'use strict';

(function (){
    const form = document.querySelector('#form');
    const dataKey = 'formData';
    const inputSelector = 'input, select, textarea';

    form.addEventListener('submit', event => {
        event.preventDefault();

        let inputs = event.target.querySelectorAll(inputSelector);
        inputs = Array.from(inputs);

        let data = inputs.reduce(
            (accum, item) => {
                accum[item.name] = item.value;
                return accum;
            },
            {}
        )
        console.log(data);

        data = JSON.stringify(data);
        localStorage.setItem(dataKey, data);

    })


})()