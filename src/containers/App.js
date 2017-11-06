import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import block from 'bem-cn'

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
        <li className='pure-menu-item'>
          <Link to='/dashboard' className='pure-menu-link'>
            Dashboard
          </Link>
        </li>
        <li className='pure-menu-item'>
          <Link to='/profile' className='pure-menu-link'>
            Profile
          </Link>
        </li>
        <LogoutButton />
      </span>
    ))

    const OnlyGuestLinks = HiddenOnlyAuth(() => (
      <span>
        <li className='pure-menu-item'>
          <Link to='/signup' className='pure-menu-link'>
            Sign Up
          </Link>
        </li>
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
