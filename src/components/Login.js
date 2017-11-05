import React from 'react'
import { store } from '../global'
import loginUser from '../helpers/loginUser'

export function Login() {
  store.dispatch(loginUser())

  return (
    <main className="container">
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>Login</h1>
          <p>Wait...</p>
        </div>
      </div>
    </main>
  )
}

export default Login
