import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export function TodoList({ todos, onSaveTodo, onFinishTodo, onRemoveTodo }) {
  return todos && todos.length > 0 ? (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          {...todo}
          key={index}
          onFinish={() => onFinishTodo(index, Date.now())}
          onSave={props => onSaveTodo(index, props)}
          onRemove={() => onRemoveTodo(index)}
        />
      ))}
    </ul>
  ) : null
}

TodoList.propTypes = {
  onFinishTodo: PropTypes.func.isRequired,
  onSaveTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.string,
      dueDate: PropTypes.number,
      completed: PropTypes.bool.isRequired,
      completedAt: PropTypes.number,
    }).isRequired,
  ).isRequired,
}

export default TodoList
