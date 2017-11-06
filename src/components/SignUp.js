import React from 'react'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import Container from './Container'

export function SignUp() {
  return (
    <Container tag='main'>
      <h1>Sign Up</h1>
      <p>We've got your wallet information, simply input your name and your account is made!</p>
      <SignUpFormContainer />
    </Container>
  )
}

export default SignUp
