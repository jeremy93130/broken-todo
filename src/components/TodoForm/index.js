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
    return (
      <div>
        
      </div>
    )
  }
}

export default TodoForm