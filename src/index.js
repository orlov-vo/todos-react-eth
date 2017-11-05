import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Utils
import getWeb3 from './utils/web3'
import './utils/bem'

import { store, history } from './global'

// App
import App from './containers/App'

// Initialize web3 and set in Redux.
getWeb3()
  .then(results => {
    ReactDOM.render(
      (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      ),
      document.getElementById('root')
    )
  })
  .catch(() => {
    console.log('Error in web3 initialization.')
  })
