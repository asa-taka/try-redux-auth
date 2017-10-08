import React from 'react'
import { connect } from 'react-redux'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const mapStateToProps = ({ auth }) => ({
  login: auth.get('login'),
  user: auth.get('user'),
})

export const LoginWidget = connect(mapStateToProps)(
  ({ login, user }) => {
    if (!login) return (
      <div>
        <LoginButton />
      </div>
    )
    return (
      <div>
        <span>{user}</span> <LogoutButton />
      </div>
    )
  }
)

export default LoginWidget
