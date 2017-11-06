import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import bootstrap from './bootstrap'
import getWeb3 from './utils/web3'
import App from './containers/App'

import { store, history } from './global'

function renderApp(Component) {
  return bootstrap(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
  )
}

// Initialize web3 and render app.
getWeb3()
  .then(() => renderApp(App))
  .catch(() => {
    console.log('Error in web3 initialization.')
  })

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => renderApp(App))
}
