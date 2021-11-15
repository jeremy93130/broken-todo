import React, { Component } from 'react'

import './App.css'
import todosTemplate from './todo.json'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoResults from './components/TodoResults'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  handleAddTodo(task) {
    // Fixer l'ajout d'une tâche
  }

  handleDelete(id) {
    // Fixer la suppression d'une tâche
  }

  toggleCheck(id) {
    // Fixer le toggle de la checkbox d'une tâche (au click, cocher ou décocher la tache)
  }

  handleKeyUp(e, id) {
    if (e.keyCode === 13) {
      this.toggleCheck(id)
    }
  }

  calculateChecked() {
    // Fixer le compteur de tâches complétées
  }

  render() {
    return (
      <div className="root">
        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          toggleCheck={this.toggleCheck}
          handleKeyUp={this.handleKeyUp}

        />
        <TodoResults
          calculateChecked={this.calculateChecked}
        />
        <TodoForm
          handleAddTodo={this.handleAddTodo}
        />
      </div>
    )
  }
}

export default App
