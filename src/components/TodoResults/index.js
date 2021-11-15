import React, { Component } from 'react'

import './todo-results.css'

class TodoResults extends Component {
  render() {
    const { calculateChecked } = this.props

    return (
      <div className="todo-results">
        Done:
        {calculateChecked()}
      </div>
    )
  }
}

export default TodoResults