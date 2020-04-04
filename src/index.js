import React from "react";
import ReactDOM from 'react-dom';

// вынесем в отдельный компонент список дел
// все React компоненты пишутся с большой буквы. React будет воспринимать их как кастомные html теги
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

// вынесем в отдельный компонент заголовок
const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

// вынесем в отдельный компонент панель поиска
const SearchPanel = () => {
  return (
    <input placeholder='search'/>
  );
};

// теперь для того, чтобы использовать компонент - достаточно использовать тег компонента в нужном месте

// создадим общий компонент App для всего нашего приложения
const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

// ReactDOM принимает в качестве 1го параметра - React элемент, а не компонент(!)
ReactDOM.render(<App/>,
  document.getElementById('root'));



