import React, { Component } from 'react'
import './checkbox.css'

class Checkbox extends Component {
  render() {
    const { onClick, checked, onDelete, label, onKeyUp } = this.props

    return (
      <div className="checkbox">
        <div
          tabIndex="0"
          role="checkbox"
          aria-checked
          className="checkbox-content"
          onClick={onClick}
          onKeyUp={onKeyUp}
        >
          <input tabIndex="-1" type="checkbox" checked={checked} onChange={onClick} />
          <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
        </div>
        <button type="button" className="checkbox-delete" onClick={onDelete}>
          x
        </button>
      </div>
    )
  }
}

export default Checkbox
