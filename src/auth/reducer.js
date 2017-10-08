import { Map } from 'immutable'

import { handleActions } from 'redux-actions'

import actions from './actions'

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

export default reducer
