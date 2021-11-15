import React, { Component } from 'react'

import './todo-list.css'
import Checkbox from '../Checkbox'

class TodoList extends Component {
  render() {
    const { todos, toggleCheck, handleDelete, handleKeyUp } = this.props

    return (
      <div className="todo-list">
        <span className="todo-list-title">Things to do:</span>
        {todos.length ? (
          <div className="todo-list-content">
            {todos.map((todoItem) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-todos">Pas de tâches pour aujourd'hui !</div>
        )}
      </div>
    )
  }
}

export default TodoList