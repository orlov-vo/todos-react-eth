import { push } from 'react-router-redux'

import { store } from '../global'
import { userLoggedOut } from '../redux/user/user.actions'

export function logoutUser() {
  return function (dispatch) {
    // Logout user.
    dispatch(userLoggedOut())

    // Redirect home.
    return store.dispatch(push('/'))
  }
}

export default logoutUser
