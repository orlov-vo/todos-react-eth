import Web3 from 'web3'
import { web3Initialized } from '../redux/web3/web3.actions'
import { store } from '../global'

let results

export function getWeb3() {
  return new Promise(function (resolve, reject) {
    if (results != null) {
      return resolve(web3Initialized(results))
    }

    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', function (dispatch) {
      let web3 = window.web3

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider.
        web3 = new Web3(web3.currentProvider)

        results = {
          web3Instance: web3,
        }

        console.log('Injected web3 detected.')

        resolve(store.dispatch(web3Initialized(results)))
      } else {
        // Fallback to localhost if no web3 injection. We've configured this to
        // use the development console's port by default.
        const provider = new Web3.providers.HttpProvider('http://localhost:9545')

        web3 = new Web3(provider)

        results = {
          web3Instance: web3,
        }

        console.log('No web3 instance injected, using Local web3.')

        resolve(store.dispatch(web3Initialized(results)))
      }
    })
  })
}

export default getWeb3
