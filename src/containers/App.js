import React, { Component } from 'react'
import { Link } from 'react-router'
import block from 'bem-cn';

import { HiddenOnlyAuth, VisibleOnlyAuth } from '../utils/wrappers'

// UI Components
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

// Styles
import '../styles/oswald.css'
import '../styles/open-sans.css'
import '../styles/pure-min.css'
import './App.css'

const b = block('app');
class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButton />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButton />
      </span>
    )

    return (
      <div className={b()}>
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
          <Link to="/" className="pure-menu-heading pure-menu-link">TODO List D-App</Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App
