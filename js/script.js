'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.getElementById('categories');
    const products = document.getElementById('products');
    const productInfo = document.getElementById('product-info');
    const productList = products.querySelector('ul');
    const productDetInfo = document.getElementById('info');
    const buyBtn = document.getElementById('buy-btn');

    const data = {
        phone: [
            {
                id: 1,
                name: 'iPhone',
                description: 'iPhone 15 Pro Max'
            },
            {
                id: 2,
                name: 'Samsung',
                description: 'Galaxy Z Fold5'
            }
        ],
        tv: [
            {
                id: 1,
                name: 'Samsung',
                description: '65" Class OLED S90C'
            },
            {
                id: 2,
                name: 'LG',
                description: '4K UHD Smart TV'
            },
        ],
        laptop: [
            {
                id: 1,
                name: 'DELL',
                description: 'Precision 5680 - 16" - Intel Core i9 13900H - vPro Enterprise - 32 GB RAM - 1 TB SSD'
            },
            {
                id: 2,
                name: 'Microsoft Surface Laptop 6',
                description: '15in - Intel Core Ultra 7 165H - 32GB - 512GB - CM SC - ENG US/Canada - Commercial - Platinum'
            }
        ]
    };

    categories.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            var category = e.target.dataset.category;
            displayProducts(category);
        }
    });

    productList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            var category = e.target.dataset.category;
            var productId = e.target.dataset.id;
            displayProductInfo(category, productId);
        }
    });

    buyBtn.addEventListener('click', function() {
        alert('Товар куплений!');
        resetView();
    });

    function displayProducts(category) {
        productList.innerHTML = data[category].map(function(product) {
            return '<li data-id="' + product.id + '" data-category="' + category + '">' + product.name + '</li>';
        }).join('');
        products.style.display = 'block';
        productInfo.style.display = 'none';
    }

    function displayProductInfo(category, productId) {
        var product = data[category].find(function(p) {
            return p.id == productId;
        });
        productDetInfo.innerHTML = '<h3>' + product.name + '</h3><p>' + product.description + '</p>';
        productInfo.style.display = 'block';
    }

    function resetView() {
        products.style.display = 'none';
        productInfo.style.display = 'none';
    }
});

