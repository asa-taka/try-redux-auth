import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import { Button } from 'reactstrap'

export const LoginButton = connect()(
  ({ dispatch }) => {
    const onClick = () => dispatch(actions.auth('my-name'))
    const buttonProps = { onClick, color: 'primary' }
    return <Button {...buttonProps}>Login</Button>
  }
)

export default LoginButton
