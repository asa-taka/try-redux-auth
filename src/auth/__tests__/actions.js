import { actions } from '../actions'

describe('auth', () => {
  const { auth } = actions
  it('should return the initial state', () => {
    expect(auth('some-user')).toEqual({
      type: 'AUTH', payload: 'some-user',
    })
  })
})

describe('unauth', () => {
  const { unauth } = actions
  it('should return the initial state', () => {
    expect(unauth()).toEqual({
      type: 'UNAUTH',
    })
  })
})
