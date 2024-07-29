### Homework #79

Необходимо создать компонент Definitions.jsx который:

1. Будет возвращать следующую структуру — task3.html
    <!-- Результатом выполнения вашего кода должен быть следующий вывод: -->

<dl>
    <dt>one</dt>
    <dd>two</dd>
    <dt>another term</dt>
    <dd>another description</dd>
</dl>



<!-- Как работает тег dl-->

<!--
dl – тег, который используется при создании списков определений. Совместно с этим тегом используется тег dt
(содержит название определения) и dd (описание определения):
-->
<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>

2. всі компоненти повинні бути класові
3. Компонент принимает данные через пропс — данные лежат тут
   const definitions = [
   { dt: 'one', dd: 'two', id: 1 },
   { dt: 'another term', dd: 'another description', id: 2 },
   ];

    <DefinitionsList data={definitions} />;
4. Необходимо принять их в компоненте и отрендерить
5. Подключить компонент Definitions в App.js и отрендерить его

   P.S Не забывайте про пропс key