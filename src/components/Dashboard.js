import React from 'react'
import PropTypes from 'prop-types'
import block from 'bem-cn-lite'
import * as f from '../redux/todo/todo.filters'
import AddTodo from './AddTodo'
import Container from './Container'
import PageTitle from './PageTitle'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'

import './Dashboard.scss'

const b = block('dashboard')
export function Dashboard({
  name,
  onAddTodo,
  onFinishTodo,
  onSaveTodo,
  onRemoveTodo,
  onStatusFilterChange,
  onPriorityFilterChange,
  todos,
  visibleTodos,
  statusFilter,
  priorityFilter,
}) {
  return (
    <Container tag='main'>
      <div className={b()}>
        <PageTitle title='Dashboard' />
        <p>
          Congratulations {name}! If you're seeing this page, you've logged in with your own smart
          contract successfully.
        </p>

        {todos.length > 0 ? (
          <div>
            <div className={b('filters')}>
              <TodoFilters
                statusFilter={statusFilter}
                priorityFilter={priorityFilter}
                onStatusFilterChange={onStatusFilterChange}
                onPriorityFilterChange={onPriorityFilterChange}
              />
            </div>
            <div className={b('todos')}>
              <TodoList
                todos={visibleTodos}
                onFinishTodo={onFinishTodo}
                onSaveTodo={onSaveTodo}
                onRemoveTodo={onRemoveTodo}
              />
            </div>
          </div>
        ) : (
          <div className={b('no-tasks')}>
            At the moment there are no tasks, add tasks via the form below
          </div>
        )}
        <div className={b('add-todo')}>
          <AddTodo onAddClick={onAddTodo} />
        </div>
      </div>
    </Container>
  )
}

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.string,
      dueDate: PropTypes.number,
      completed: PropTypes.bool.isRequired,
      completedAt: PropTypes.number,
    }),
  ),
  visibleTodos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.string,
      dueDate: PropTypes.number,
      completed: PropTypes.bool.isRequired,
      completedAt: PropTypes.number,
    }),
  ),
  statusFilter: PropTypes.oneOf([f.STATUS_ALL, f.STATUS_COMPLETED, f.STATUS_ACTIVE]).isRequired,
  priorityFilter: PropTypes.oneOf([
    f.PRIORITY_ALL,
    f.PRIORITY_HIGH,
    f.PRIORITY_MEDIUM,
    f.PRIORITY_LOW,
    f.PRIORITY_NONE,
  ]).isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onFinishTodo: PropTypes.func.isRequired,
  onSaveTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onStatusFilterChange: PropTypes.func.isRequired,
  onPriorityFilterChange: PropTypes.func.isRequired,
}

export default Dashboard
