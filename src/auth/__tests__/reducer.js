import reducer from '../reducer'
import { actions } from '../actions'

describe('reducer', () => {

  const { auth, unauth } = actions

  const doActions = (...actions) => {
    return actions.reduce((s, act) => reducer(s, act), undefined)
  }

  it('should return the initial state', () => {
    const res = reducer(undefined, {})
    const expected = { login: false }
    expect(res.toJS()).toEqual(expected)
  })

  it('should return the authed state, after auth', () => {
    const res = doActions(auth('some-user'))
    const expected = { login: true, user: 'some-user' }
    expect(res.toJS()).toEqual(expected)
  })

  it('should return the unauthed state, after unauth', () => {
    const res = doActions(unauth())
    const expected = { login: false, user: undefined }
    expect(res.toJS()).toEqual(expected)
  })

  it('should return the unauthed state, after unauth', () => {
    const res = doActions(auth('some-user'), unauth())
    const expected = { login: false, user: undefined }
    expect(res.toJS()).toEqual(expected)
  })
})
