import React, {Component} from 'react';
import classNames from 'classnames';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  
  render() {
    const {
      label, onDeleted,
      onToggleImportant,
      onToggleDone,
      important, done
    } = this.props;
    
    let todoItemClasses = classNames({
      "todo-list-item": true,
      "done": done,
      "important": important
    });
    
    return (
      <span className={todoItemClasses}>
        <span
          className='todo-list-item-label'
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
        </button>
        
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation"/>
        </button>
      </span>
    );
  }
}