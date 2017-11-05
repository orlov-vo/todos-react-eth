import { connect } from 'react-redux'

import Button from '../components/Button'
import logoutUser from '../helpers/logoutUser'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      event.preventDefault();

      dispatch(logoutUser())
    }
  }
}

export const LogoutButton = connect(
  undefined,
  mapDispatchToProps
)(props => Button({ ...props, name: 'Logout' }))

export default LogoutButton
