import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import Input from '../components/Input'

export default class TodoForm extends Component {
  clear(e) {
    this.titleInput.clear()
    this.impInput.clear()
    this.dueDateInput.clear()
    this.descInput.clear()
  }

  snapshot() {
    const dueDate = this.dueDateInput.value().trim()

    return {
      title: this.titleInput.value().trim(),
      priority: this.impInput.value().trim(),
      dueDate: dueDate.length > 0 ? Date.parse(dueDate) : undefined,
      description: this.descInput.value().trim(),
    }
  }

  render() {
    const { title, description, priority } = this.props
    const dueDate = this.props.dueDate
      ? Moment(this.props.dueDate).format('YYYY-MM-DDTHH:mm')
      : undefined

    return (
      <div>
        <Input label='Title' value={title} ref={input => (this.titleInput = input)} />
        <Input
          label='Priority'
          options={{ high: 'High', medium: 'Medium', low: 'Low' }}
          value={priority}
          placeholder='Choose priority of the task'
          ref={input => (this.impInput = input)}
        />
        <Input
          label='Due date'
          type='datetime-local'
          value={dueDate}
          ref={input => (this.dueDateInput = input)}
        />
        <Input
          label='Description'
          type='textarea'
          value={description}
          ref={input => (this.descInput = input)}
        />
      </div>
    )
  }
}

TodoForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  dueDate: PropTypes.number,
}
