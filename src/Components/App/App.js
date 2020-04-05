import React, {Component} from "react";
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import './App.css'
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      todoData: [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
      ]
    };
    
    this.arrLength = this.state.todoData.length + 1;
  }
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];
      
      return {
        todoData: newArray
      };
    });
  };
  
  addItem = (text) => {
    // формируем новый item - label пока будем получать как передаваемый текст, id генерим отталкиваясь от текущей длины массива с items
    const newItem = {label: text, important: false, id: this.arrLength++};
    
    // формируем новый массив на основе текущего todoData и новый item, который мы сгенерили
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      
      return {
        todoData: newArr
      }
    });
  };
  
  onToggleImportant = (id) => {
    console.log('Toggle Important', id);
  };
  
  onToggleDone = (id) => {
    console.log('Toggle Done', id);
  };
  
  render() {
    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3}/>
        <div className='top-panel d-flex'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm
          onAddItem={this.addItem}/>
      </div>
    );
  }
}