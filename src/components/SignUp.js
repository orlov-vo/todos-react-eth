import React from 'react'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import Container from './Container'
import PageTitle from './PageTitle'

export function SignUp() {
  return (
    <Container tag='main'>
      <PageTitle title='Sign Up' />
      <p>We've got your wallet information, simply input your name and your account is made!</p>
      <SignUpFormContainer />
    </Container>
  )
}

export default SignUp
