import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  
  // создаем массив jsx элементов
  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem { ...item } />
      </li>
    )
  });
  
  return (
    <ul>
      {/*добавляем все элементы разом*/}
      { elements }
    </ul>
  );
};

export default TodoList;