### Homework #78

Необходимо создать компонент Card.jsx который:

1. Будет возвращать следующую структуру 
    <div className="card">
       <div className="card-body">
         <h4 className="card-title">hi</h4>
         <p className="card-text">how are you?</p>
       </div>
    </div>
2. компонент повинен бути класовий
3. Компонент принимает 2 пропса title и text
4. Необходимо принять их в компоненте и отрендерить в соответствующих местах
5. Если какого-то пропса не хватает (не был передан в компонент), то не рендерим html код который его оборачивает
6. Подключить компонент в App.js и отрендерить 3 раза (передавая пропсы по очереди)
   6.1. При первом рендере передаем только title 
   6.2. При втором только text 
   6.3. При третьем оба пропса