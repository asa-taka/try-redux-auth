import { Map } from 'immutable'

import { createActions, handleActions } from 'redux-actions'

const identityActions = ['AUTH', 'UNAUTH']
export const actions = createActions({}, ...identityActions)

const initialState = Map({
  login: false,
})

export const reducer = handleActions({
  [actions.auth]: (state, { payload: user }) => {
    return state.merge({ user, login: true })
  },
  [actions.unauth]: (state) => {
    return state.merge({ user: undefined, login: false })
  }
}, initialState)
