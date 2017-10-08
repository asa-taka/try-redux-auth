import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { auth } from './actions'

const InputFormGroup = ({ label, ...inputProps}) => {
  return (
    <FormGroup>
      <Label for={inputProps.id}>{label}</Label>
      <Input {...inputProps} />
    </FormGroup>
  )
}

export class LoginForm extends React.Component {

  state = { user: undefined }

  render() {

    const handleChange = event => {
      const newState = { user: event.target.value }
      this.setState(() => newState)
    }

    const handleSubmit = event => {
      this.props.onSubmit(this.state)
    }

    return (
      <Form>
        <InputFormGroup label="User Name" type="text" name="email" onChange={handleChange} />
        <Button onClick={handleSubmit} color="secondary">Submit</Button>
      </Form>
    )
  }
}

export const LoginFormWithStore = connect()(props => {
  const onSubmit = event => props.dispatch(auth(event.user))
  return <LoginForm onSubmit={onSubmit} />
})

export default LoginFormWithStore
