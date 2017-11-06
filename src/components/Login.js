import React from 'react'
import { store } from '../global'
import loginUser from '../helpers/loginUser'
import Container from './Container'

export function Login() {
  store.dispatch(loginUser())

  return (
    <Container tag='main'>
      <h1>Login</h1>
      <p>Wait...</p>
    </Container>
  )
}

export default Login
