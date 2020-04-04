import React from "react";
import ReactDOM from 'react-dom';

// React-элемент часть Virtual DOM. Может содержать в себе другие элементы
const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder='search'/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);
// эквивалетный jsx код, который преобразует babel
// React.createElement('h1', null, 'Hello World!!');

// метод render() превращает React-элементы в html на странице
ReactDOM.render(el,
  document.getElementById('root'));



