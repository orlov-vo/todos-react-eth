import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

// Utils
import { UserIsAuthenticated, UserIsNotAuthenticated } from './utils/wrappers'
import getWeb3 from './utils/web3'
import './utils/bem'

// Layouts
import App from './containers/App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

// Redux Store
import store from './redux/configureStore'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
  .then(results => {
    console.log('Web3 initialized!')
  })
  .catch(() => {
    console.log('Error in web3 initialization.')
  })

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
