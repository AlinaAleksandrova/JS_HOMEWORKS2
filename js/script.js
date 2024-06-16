'use strict';

(function (){
    document.addEventListener('DOMContentLoaded', function() {
        const itemList = document.getElementById('items-list');
        const favoriteKey = 'favoriteItems';

        const loadFavorites = function() {
            const favorites = JSON.parse(localStorage.getItem(favoriteKey)) || [];
            favorites.forEach(id => {
                const item = document.querySelector(`[data-id="${id}"]`);
                if (item) {
                    item.classList.add('favorite');
                    const btn = item.querySelector('.favorite-btn');
                    btn.textContent = 'Видалити з вибраного';
                }
            });
        }

        const saveFavorites = function(favorites) {
            localStorage.setItem(favoriteKey, JSON.stringify(favorites));
        }

        const toggleFavorite = function(item) {
            const id = item.getAttribute('data-id');
            const favorites = JSON.parse(localStorage.getItem(favoriteKey)) || [];
            const index = favorites.indexOf(id);

            if (index > -1) {
                favorites.splice(index, 1);
                item.classList.remove('favorite');
                item.querySelector('.favorite-btn').textContent = 'Додати в обране';
            } else {
                favorites.push(id);
                item.classList.add('favorite');
                item.querySelector('.favorite-btn').textContent = 'Видалити з вибраного';
            }

            saveFavorites(favorites);
        }

        itemList.addEventListener('click', function(event) {
            if (event.target.classList.contains('favorite-btn')) {
                const item = event.target.closest('li');
                toggleFavorite(item);
            }
        });

        loadFavorites();
    });
})()