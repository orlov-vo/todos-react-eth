import * as t from './user.types';

export function userLoggedIn(user) {
  return {
    type: t.USER_LOGGED_IN,
    payload: user
  }
}

export function userLoggedOut(user) {
  return {
    type: t.USER_LOGGED_OUT,
    payload: user
  }
}

export function userUpdated(user) {
  return {
    type: t.USER_UPDATED,
    payload: user
  }
}
