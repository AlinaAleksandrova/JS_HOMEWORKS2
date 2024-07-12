'use strict';

(function (){
    document.getElementById('searchButton').addEventListener('click', () => {
        const postId = document.getElementById('postId').value;
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        if (postId < 1 || postId > 100) {
            resultDiv.innerHTML = '<p class="error">ID має бути від 1 до 100</p>';
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Публікацію не знайдено');
                }
                return response.json();
            })
            .then(post => {
                displayPost(post);
            })
            .catch(error => {
                resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
            });
    });

    function displayPost(post) {
        const resultDiv = document.getElementById('result');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="loadCommentsButton">Показати коментарі</button>
        <div class="comments"></div>
    `;
        resultDiv.appendChild(postDiv);

        document.getElementById('loadCommentsButton').addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Коментарі не знайдені');
                    }
                    return response.json();
                })
                .then(comments => {
                    displayComments(comments, postDiv.querySelector('.comments'));
                })
                .catch(error => {
                    const commentsDiv = postDiv.querySelector('.comments');
                    commentsDiv.innerHTML = `<p class="error">${error.message}</p>`;
                });
        });
    }

    function displayComments(comments, container) {
        container.innerHTML = '<h3>Коментарі</h3>';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.innerHTML = `
            <p><strong>${comment.name}</strong> (${comment.email})</p>
            <p>${comment.body}</p>
        `;
            container.appendChild(commentDiv);
        });
    }

})()