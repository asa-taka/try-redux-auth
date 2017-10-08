import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { auth } from './actions'

const InputForm = ({ label, ...inputProps}) => {
  return (
    <FormGroup>
      <Label for={inputProps.id}>{label}</Label>
      <Input {...inputProps} />
    </FormGroup>
  )
}

const LoginForm = ({ dispatch }) => {

  const onSubmit = event => {
    console.log('submit', event)
  }
  const onChange = event => {
    console.log('change', event)
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputForm label="User Name" type="text" name="email"
        onChange={onChange} />
      <Button color="secondary" type="submit">Submit</Button>
    </Form>
  )
}

export default LoginForm
