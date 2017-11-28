import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

const validation = values => {
  console.log('Call validation')
}

const warning = values => {
  console.log('call warning')
}

let RegisterCarForm = props => {
  const { handleSubmit } = props

  const onSubmitForm = (data) => {

  }

  return(
    <Form>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Field>
          <label>Car Image</label>
          <Field name='car_image' component='input' type='file' />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <Field name='car_name' component='input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <Field name='car_type' component='input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>ID</label>
          <Field name='car_id' component='input' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Color</label>
          <Field name='car_color' component='input' type='text' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

RegisterCarForm = reduxForm({
  form: 'registerCar'
})(RegisterCarForm)

export default RegisterCarForm