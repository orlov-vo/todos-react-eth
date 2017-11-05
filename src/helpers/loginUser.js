import { push } from 'react-router-redux'
import { parse } from 'qs'

import { store, history } from '../global'
import { AuthenticationContract } from '../contracts'
import { userLoggedIn } from '../redux/user/user.actions'

const contract = require('truffle-contract')

export function loginUser() {
  const web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function (dispatch) {
      // Using truffle-contract we create the authentication object.
      const authentication = contract(AuthenticationContract)
      authentication.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var authenticationInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        authentication.deployed().then(function (instance) {
          authenticationInstance = instance

          // Attempt to login user.
          authenticationInstance.login({ from: coinbase })
            .then(function (result) {
              // If no error, login user.
              const userName = web3.toUtf8(result)

              dispatch(userLoggedIn({
                name: userName,
              }))

              return store.dispatch(push('/dashboard'))
            })
            .catch(function (error) {
              // If error, go to signup page.
              console.error('Wallet ' + coinbase + ' does not have an account!')

              return store.dispatch(push('/signup'))
            })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}

export default loginUser
