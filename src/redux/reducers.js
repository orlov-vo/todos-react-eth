import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import web3Reducer from './web3/web3.reducer'
import todoReducer from './todo/todo.reducer'
import userReducer from './user/user.reducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  web3: web3Reducer,
  todo: todoReducer,
})

export default reducer
