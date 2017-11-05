import { connect } from 'react-redux'

import SignUpForm from './SignUpForm'
import signUpUser from '../helpers/signUpUser'

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpFormSubmit: (name) => {
      dispatch(signUpUser(name))
    }
  }
}

const SignUpFormContainer = connect(
  undefined,
  mapDispatchToProps
)(SignUpForm)

export default SignUpFormContainer
