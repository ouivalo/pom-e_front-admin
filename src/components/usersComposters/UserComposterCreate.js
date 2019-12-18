import React from 'react'
import { required, AutocompleteInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { enumDroits } from '../Enums'

const initialValues = {
  user: { roles: 'ROLE_USER', userConfirmedAccountURL: `${process.env.REACT_APP_FRONTEND_ENTRYPOINT}/confirmation` }
}

const UserComposterCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list" defaultValue={initialValues}>
      <TextInput source="user.username" label="resources.users.fields.username" validate={required()} />
      <TextInput source="user.email" label="resources.users.fields.email" validate={required()} />
      <TextInput source="user.plainPassword" label="resources.users.fields.plainPassword" type="password" validate={required()} />
      <TextInput source="user.firstname" label="resources.users.fields.firstname" />
      <TextInput source="user.lastname" label="resources.users.fields.lastname" />
      <TextInput source="user.phone" label="resources.users.fields.phone" />
      <SelectInput source="capability" choices={enumDroits} defaultValue={enumDroits[0].id} validate={required()} />
      <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })} validate={required()}>
        <AutocompleteInput optionValue="@id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export default UserComposterCreate
