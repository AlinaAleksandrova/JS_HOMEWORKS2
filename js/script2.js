'use strict';

(function (){

    document.addEventListener('DOMContentLoaded', function (){
        const dataList = document.getElementById('data-list');
        const message = document.getElementById('message');
        const data = localStorage.getItem('formData');

        if(data){
            const parsedData = JSON.parse(data);
            for(const key in parsedData){
                const listItem = document.createElement('li');
                listItem.textContent = `${key}: ${parsedData[key]}`;
                dataList.appendChild(listItem);
            }
        }
        else{
            message.style.display = 'block';
        }
    })
})()