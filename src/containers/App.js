import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import block from 'bem-cn-lite'

import {
  HiddenOnlyAuth,
  VisibleOnlyAuth,
  UserIsAuthenticated,
  UserIsNotAuthenticated,
} from '../utils/wrappers'

// UI Components
import Home from '../components/Home'
import Login from '../components/Login'
import DashboardContainer from './DashboardContainer'
import SignUp from '../components/SignUp'
import Profile from '../components/Profile'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Logotype from '../components/Logotype'
import Container from '../components/Container'

// UI Containers
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

// Styles
import './App.scss'

const b = block('app')
class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() => (
      <span>
        <Button to='/dashboard' mod='navbar-link' name='Dashboard' />
        <Button to='/profile' mod='navbar-link' name='Profile' />
        <LogoutButton mod='navbar-link' />
      </span>
    ))

    const OnlyGuestLinks = HiddenOnlyAuth(() => (
      <span>
        <Button to='/signup' mod='navbar-link' name='Sign Up' />
        <LoginButton mod='navbar-link' />
      </span>
    ))

    const leftMenu = <Logotype />

    const rightMenu = (
      <span>
        <OnlyGuestLinks />
        <OnlyAuthLinks />
      </span>
    )

    return (
      <div className={b()}>
        <Navbar left={leftMenu} right={rightMenu} />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={UserIsAuthenticated(DashboardContainer)} />
          <Route path='/login' component={UserIsNotAuthenticated(Login)} />
          <Route path='/signup' component={UserIsNotAuthenticated(SignUp)} />
          <Route path='/profile' component={UserIsAuthenticated(Profile)} />
        </Switch>

        <Container tag='footer'>
          <div className={b('copyright')}>
            Copyright &copy; 2017 &mdash; Vladislav Orlov &mdash; orlov-vo.ru
          </div>
        </Container>
      </div>
    )
  }
}

export default App
