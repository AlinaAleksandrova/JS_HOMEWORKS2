'use strict';

(function () {
    const todoForm = document.getElementById('todoForm');
    const todoItems = document.getElementById('todoItems');
    const removeAllButton = document.querySelector('[data-remove-all]');
    const localStorageKey = 'todoList';
    const localStorageCounterKey = 'todoCounter';

    document.addEventListener('DOMContentLoaded', function() {
        const counter = function() {
            if(localStorage.getItem(localStorageCounterKey) === null){
                localStorage.setItem(localStorageCounterKey, '1');
            }
        }

        const loadTodos = function() {
            const todos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
            todos.forEach(function(todo) {
                createTodoElement(todo);
            });
        }

        const getTodoCounter = function() {
            return parseInt(localStorage.getItem(localStorageCounterKey), 10);
        }

        const incrementTodoCounter = function() {
            const counter = getTodoCounter() + 1;
            localStorage.setItem(localStorageCounterKey, counter);
            return counter;
        }

        const createTodoElement = function(todo) {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-4';

            const wrapper = document.createElement('div');
            wrapper.className = 'wrapper';

            const title = document.createElement('h4');
            title.className = 'title';
            title.textContent = `${todo.number}. ${todo.title}`;

            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = todo.description;

            const date = document.createElement('date');
            date.className = 'date';
            date.textContent = 'Created on: ' + new Date(todo.date).toLocaleString();

            const button = document.createElement('button');
            button.className = 'btn btn-danger mt-2';
            button.textContent = 'Remove Task';
            button.onclick = function() {
                removeTodoElement(todo, colDiv);
            }

            wrapper.appendChild(title);
            wrapper.appendChild(description);
            wrapper.appendChild(date);
            wrapper.appendChild(button);
            colDiv.appendChild(wrapper);
            todoItems.appendChild(colDiv);
        }

        const addTodo = function(event) {
            event.preventDefault();
            const formData = new FormData(todoForm);
            const newTodo = {
                number: incrementTodoCounter(),
                title: formData.get('title'),
                description: formData.get('description'),
                date: new Date().toISOString()
            };

            createTodoElement(newTodo);

            const todos = getTodos();
            todos.push(newTodo);
            saveTodos(todos);

            todoForm.reset();
        }

        const removeTodoElement = function(todo, element) {
            const todos = getTodos().filter(function(t) {
                return t.number !== todo.number;
            });
            saveTodos(todos);
            todoItems.removeChild(element);
        }

        const getTodos = function() {
            return JSON.parse(localStorage.getItem(localStorageKey)) || [];
        }

        const saveTodos = function(todos) {
            localStorage.setItem(localStorageKey, JSON.stringify(todos));
        }

        function removeAllTodos() {
            localStorage.removeItem(localStorageKey);
            localStorage.setItem(localStorageCounterKey, '1');
            while (todoItems.firstChild) {
                todoItems.removeChild(todoItems.firstChild);
            }
        }

        counter();
        todoForm.addEventListener('submit', addTodo);
        removeAllButton.addEventListener('click', removeAllTodos);
        loadTodos();
    });

})();
