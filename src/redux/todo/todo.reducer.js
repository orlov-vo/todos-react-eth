import { combineReducers } from 'redux'
import * as t from './todo.types'
import * as f from './todo.filters'

function statusFilter(state = f.STATUS_ALL, action) {
  switch (action.type) {
    case t.SET_STATUS_FILTER:
      return action.payload
    default:
      return state
  }
}

function priorityFilter(state = f.PRIORITY_ALL, action) {
  switch (action.type) {
    case t.SET_PRIORITY_FILTER:
      return action.payload
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case t.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload,
          completed: false,
        },
      ]
    case t.COMPLETE_TODO:
      return [
        ...state.slice(0, action.payload.index),
        {
          ...state[action.payload.index],
          completed: true,
          completedAt: action.payload.completedAt,
        },
        ...state.slice(action.payload.index + 1),
      ]
    case t.UPDATE_TODO:
      return [
        ...state.slice(0, action.payload.index),
        {
          ...state[action.payload.index],
          ...action.payload.props,
        },
        ...state.slice(action.payload.index + 1),
      ]

    case t.REMOVE_TODO:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    default:
      return state
  }
}

export const todoReducer = combineReducers({
  statusFilter,
  priorityFilter,
  todos,
})

export default todoReducer
