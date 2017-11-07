import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import Button from './Button'
import TodoForm from '../containers/TodoForm'

import './AddTodo.scss'

const b = block('add-todo')
export function AddTodo(props) {
  let form

  function handleClick(e) {
    e.preventDefault()
    props.onAddClick(form.snapshot())
    form.clear()
  }

  return (
    <div className={b()}>
      <h3 className={b('title')}>Add a new task</h3>

      <TodoForm ref={f => (form = f)} />

      <div className={b('footer')}>
        <Button onClick={handleClick} name='Submit task' mod='primary' />
      </div>
    </div>
  )
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired,
}

export default AddTodo
