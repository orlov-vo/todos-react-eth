import * as t from './user.types'

export const initialState = {
  data: null,
}

export const userReducer = (state = initialState, action) => {
  if (action.type === t.USER_LOGGED_IN || action.type === t.USER_UPDATED) {
    return Object.assign({}, state, {
      data: action.payload,
    })
  } else if (action.type === t.USER_LOGGED_OUT) {
    return Object.assign({}, state, {
      data: null,
    })
  }

  return state
}

export default userReducer
