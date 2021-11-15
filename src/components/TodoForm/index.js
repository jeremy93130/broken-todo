import React, { Component } from 'react'

import './todo-form.css'

class TodoForm extends Component {
  constructor() {
    super()

    this.state = {
      task: ''
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.handleAddTodo()
    }
  }

  render() {
    const { handleAddTodo } = this.props
    
    return (
      <div className="todo-form">
        <input
          placeholder="Enter new task"
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value} )}
          onKeyUp={this.handleKeyUp}
        />
        <button type="button" onClick={handleAddTodo}>
          Add task
        </button>
      </div>
    )
  }
}

export default TodoForm