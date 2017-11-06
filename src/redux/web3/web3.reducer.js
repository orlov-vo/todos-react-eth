import * as t from './web3.types'

export const initialState = {
  web3Instance: null,
}

export const web3Reducer = (state = initialState, action) => {
  if (action.type === t.WEB3_INITIALIZED) {
    return Object.assign({}, state, {
      web3Instance: action.payload.web3Instance,
    })
  }

  return state
}

export default web3Reducer
