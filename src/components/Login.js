import React from 'react'
import { store } from '../global'
import loginUser from '../helpers/loginUser'
import Container from './Container'
import PageTitle from './PageTitle'

export function Login() {
  store.dispatch(loginUser())

  return (
    <Container tag='main'>
      <PageTitle title='Login' />
      <p>Wait...</p>
    </Container>
  )
}

export default Login
