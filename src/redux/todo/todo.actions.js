import * as t from './todo.types'

export function addTodo(todo) {
  return {
    type: t.ADD_TODO,
    payload: todo,
  }
}

export function completeTodo(index, completedAt) {
  return {
    type: t.COMPLETE_TODO,
    payload: {
      index,
      completedAt,
    },
  }
}

export function updateTodo(index, props) {
  return {
    type: t.UPDATE_TODO,
    payload: {
      index,
      props,
    },
  }
}

export function removeTodo(index) {
  return {
    type: t.REMOVE_TODO,
    payload: index,
  }
}

export function setStatusFilter(filter) {
  return {
    type: t.SET_STATUS_FILTER,
    payload: filter,
  }
}

export function setPriorityFilter(filter) {
  return {
    type: t.SET_PRIORITY_FILTER,
    payload: filter,
  }
}
