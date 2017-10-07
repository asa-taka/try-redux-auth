import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import { Button } from 'reactstrap'

export const LogoutButton = connect()(
  ({ dispatch }) => {
    const onClick = () => dispatch(actions.unauth())
    const buttonProps = { onClick, color: 'secondary' }
    return <Button {...buttonProps}>Logout</Button>
  }
)

export default LogoutButton
