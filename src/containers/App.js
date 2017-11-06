import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
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
        <Button to='/dashboard'>Dashboard</Button>
        <Button to='/profile'>Profile</Button>
        <LogoutButton />
      </span>
    ))

    const OnlyGuestLinks = HiddenOnlyAuth(() => (
      <span>
        <Button to='/signup'>Sign Up</Button>
        <LoginButton />
      </span>
    ))

    return (
      <div className={b()}>
        <nav className='navbar pure-menu pure-menu-horizontal'>
          <ul className='pure-menu-list navbar-right'>
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
          <Link to='/' className='pure-menu-heading pure-menu-link'>
            TODO List D-App
          </Link>
        </nav>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={UserIsAuthenticated(DashboardContainer)} />
          <Route path='/login' component={UserIsNotAuthenticated(Login)} />
          <Route path='/signup' component={UserIsNotAuthenticated(SignUp)} />
          <Route path='/profile' component={UserIsAuthenticated(Profile)} />
        </Switch>
      </div>
    )
  }
}

export default App
