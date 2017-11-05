import createHistory from 'history/createBrowserHistory'

// Redux Store
import configureStore from './redux/configureStore'

// Initialize react-router-redux.
export const history = createHistory()
export const store = configureStore(history)
