import { connect } from 'react-redux'
import * as f from '../redux/todo/todo.filters'
import {
  addTodo,
  completeTodo,
  updateTodo,
  removeTodo,
  setStatusFilter,
  setPriorityFilter,
} from '../redux/todo/todo.actions'
import Dashboard from '../components/Dashboard'

function selectTodosByStatus(todos = [], filter = f.STATUS_ALL) {
  switch (filter) {
    case f.STATUS_ALL:
      return todos
    case f.STATUS_COMPLETED:
      return todos.filter(todo => todo.completed)
    case f.STATUS_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return []
  }
}

function selectTodosByPriority(todos = [], filter = f.PRIORITY_ALL) {
  switch (filter) {
    case f.PRIORITY_ALL:
      return todos
    case f.PRIORITY_HIGH:
      return todos.filter(todo => todo.priority === 'high')
    case f.PRIORITY_MEDIUM:
      return todos.filter(todo => todo.priority === 'medium')
    case f.PRIORITY_LOW:
      return todos.filter(todo => todo.priority === 'low')
    case f.PRIORITY_NONE:
      return todos.filter(todo => !todo.priority)
    default:
      return []
  }
}

function mapStateToProps(state) {
  return {
    name: state.user.data.name,
    todos: state.todo.todos,
    visibleTodos: selectTodosByPriority(
      selectTodosByStatus(state.todo.todos, state.todo.statusFilter),
      state.todo.priorityFilter,
    ),
    statusFilter: state.todo.statusFilter || f.STATUS_ALL,
    priorityFilter: state.todo.priorityFilter || f.PRIORITY_ALL,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: todo => dispatch(addTodo(todo)),
    onFinishTodo: (index, timestamp) => dispatch(completeTodo(index, timestamp)),
    onSaveTodo: (index, props) => dispatch(updateTodo(index, props)),
    onRemoveTodo: index => dispatch(removeTodo(index)),
    onStatusFilterChange: filter => dispatch(setStatusFilter(filter)),
    onPriorityFilterChange: filter => dispatch(setPriorityFilter(filter)),
  }
}

export const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
