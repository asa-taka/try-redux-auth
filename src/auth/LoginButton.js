import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import LoginForm from './LoginForm'
import { ModalButton } from '../bootstrap'

export const LoginButton = connect()(
  ({ dispatch }) => {
    const onClick = () => dispatch(actions.auth('my-name'))
    const buttonProps = { onClick, color: 'primary' }
    return (
      <ModalButton title="login" {...buttonProps}>
        <LoginForm />
      </ModalButton>
    )
  }
)

export default LoginButton
