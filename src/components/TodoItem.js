import React, { Component } from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import cn from 'classnames'
import Moment from 'moment'
import Button from './Button'
import Badge from './Badge'
import TodoForm from '../containers/TodoForm'

import './TodoItem.scss'

const b = block('todo-item')
export class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdit: false,
    }
    this.handleSaveItem = this.handleSaveItem.bind(this)
  }

  handleSaveItem(e) {
    e.preventDefault()
    this.props.onSave(this.form.snapshot())
    this.form.clear()
    this.setState({
      isEdit: false,
    })
  }

  render() {
    const {
      completed,
      completedAt,
      priority,
      dueDate,
      title,
      onFinish,
      onRemove,
      description,
    } = this.props

    return (
      <li
        className={b({
          completed: completed,
          priority: priority,
          overdue: dueDate && new Date(dueDate) < new Date(),
        })}
      >
        <div className={b('header')}>
          <h3 className={b('title')}>{title}</h3>
          <div className={b('actions')}>
            {!completed && <Button name='Finish' onClick={onFinish} />}
            <Button name='Delete' onClick={onRemove} />
            {!completed && (
              <Button
                name={this.state.isEdit ? 'View' : 'Edit'}
                onClick={() => this.setState({ isEdit: !this.state.isEdit })}
              />
            )}
          </div>
        </div>

        {!completed && this.state.isEdit ? (
          <div>
            <TodoForm
              title={title}
              priority={priority}
              dueDate={dueDate}
              description={description}
              ref={f => (this.form = f)}
            />
            <span className={b('footer')}>
              <Button name='Save' onClick={this.handleSaveItem} />
            </span>
          </div>
        ) : (
          <div>
            <div className={b('description', false, cn({ 'is-empty': !description }))}>
              {description || 'No description'}
            </div>

            <span className={b('footer')}>
              {!!completedAt && (
                <Badge
                  title='This is end date for the task'
                  icon='check-square-o'
                  text={Moment(completedAt).format('L LT')}
                />
              )}
              {!!dueDate && (
                <Badge
                  title='It is due date of the task'
                  icon='clock-o'
                  text={Moment(dueDate).format('L LT')}
                />
              )}
              {priority && (
                <Badge
                  title='It is priority of the task'
                  icon='bolt'
                  text={{ high: 'High', medium: 'Medium', low: 'Low' }[priority]}
                />
              )}
            </span>
          </div>
        )}
      </li>
    )
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  dueDate: PropTypes.number,
  completed: PropTypes.bool.isRequired,
  completedAt: PropTypes.number,
  onFinish: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoItem
