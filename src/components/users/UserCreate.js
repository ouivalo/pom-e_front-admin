import React from 'react'
import { CreateGuesser, InputGuesser } from '@api-platform/admin'
import { required, BooleanInput, SelectInput, TextInput } from 'react-admin'
import { enumRoles } from '../Enums'

const UserCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="username" validate={required()} />
    <InputGuesser source="email" validate={required()} />
    <TextInput source="plainPassword" type="password" validate={required()} />
    <InputGuesser source="firstname" />
    <InputGuesser source="lastname" />
    <InputGuesser source="phone" />
    <SelectInput source="roles" choices={enumRoles} validate={required()} />
    <BooleanInput source="enabled" defaultValue={true} />
  </CreateGuesser>
)

export default UserCreate
