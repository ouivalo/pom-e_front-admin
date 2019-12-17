import React from 'react'
import { InputGuesser } from '@api-platform/admin'
import { required, Create, SimpleForm, SelectInput, TextInput } from 'react-admin'
import { enumAdminRoleOnly } from '../Enums'

const initialValues = { enabled: true }

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list" defaultValue={initialValues}>
      <InputGuesser source="username" validate={required()} />
      <InputGuesser source="email" validate={required()} />
      <TextInput source="plainPassword" type="password" validate={required()} />
      <InputGuesser source="firstname" />
      <InputGuesser source="lastname" />
      <InputGuesser source="phone" />
      <SelectInput source="roles" choices={enumAdminRoleOnly} validate={required()} />
    </SimpleForm>
  </Create>
)

export default UserCreate
