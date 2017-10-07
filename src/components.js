import React from 'react'
import { connect } from 'react-redux'
import { actions as auth } from './providers/auth'
import { Button } from 'reactstrap'

export const LoginButton = connect()(
  ({ dispatch }) => {
    const onClick = () => dispatch(auth.auth('my-name'))
    const buttonProps = { onClick, color: 'primary' }
    return <Button {...buttonProps}>Login</Button>
  }
)

export const LogoutButton = connect()(
  ({ login, dispatch }) => {
    const onClick = () => dispatch(auth.unauth())
    const buttonProps = { onClick, color: 'secondary' }
    return <Button {...buttonProps}>Logout</Button>
  }
)

export const LoginWidget = connect(
  ({ auth }) => ({ login: auth.get('login') })
)(
  ({ login }) => {
    console.log(login)
    return login ? <LogoutButton /> : <LoginButton />
  }
)
