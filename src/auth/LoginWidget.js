import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const mapStateToProps = ({ auth }) => ({ login: auth.get('login') })

export const LoginWidget = connect(mapStateToProps)(
  ({ login }) => {
    return login ? <LogoutButton /> : <LoginButton />
  }
)

export default LoginWidget
