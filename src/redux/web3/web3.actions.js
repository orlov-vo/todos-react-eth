import * as t from './web3.types';

export function web3Initialized(results) {
  return {
    type: t.WEB3_INITIALIZED,
    payload: results
  }
}
