import { connect } from 'react-redux'

import Button from '../components/Button'
import loginUser from '../helpers/loginUser'

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      event.preventDefault()

      dispatch(loginUser())
    },
  }
}

export const LoginButton = connect(undefined, mapDispatchToProps)(props =>
  Button({ ...props, name: 'Login' }),
)

export default LoginButton
