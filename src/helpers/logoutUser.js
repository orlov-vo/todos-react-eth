import { browserHistory } from 'react-router'

import { userLoggedOut } from '../redux/user/user.actions'

export function logoutUser() {
  return function (dispatch) {
    // Logout user.
    dispatch(userLoggedOut())

    // Redirect home.
    return browserHistory.push('/')
  }
}

export default logoutUser
