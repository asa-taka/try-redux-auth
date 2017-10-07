import reducer from '../reducer'
import { actions } from '../actions'

describe('reducer', () => {

  const { auth, unauth } = actions

  it('should return the initial state', () => {
    const expected = { login: false }
    expect(reducer(undefined, {}).toJS()).toEqual(expected)
  })

  it('should return the authed state, after auth', () => {
    const action = auth('some-user')
    const expected = { login: true, user: 'some-user' }
    expect(reducer(undefined, action).toJS()).toEqual(expected)
  })

  it('should return the unauthed state, after unauth', () => {
    const action = unauth()
    const expected = { login: false, user: undefined }
    expect(reducer(undefined, action).toJS()).toEqual(expected)
  })
})
