import React from 'react'
import { EditGuesser } from '@api-platform/admin'
import { AutocompleteInput, ReferenceField, ReferenceInput, SelectInput, TextField } from 'react-admin'

import { enumDroits } from '../Enums'

const UserComposterEdit = props => (
  <EditGuesser {...props}>
    <ReferenceField source="user" reference="users">
      <TextField source="username" />
    </ReferenceField>
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
      <AutocompleteInput optionValue="@id" />
    </ReferenceInput>
    <SelectInput source="capability" choices={enumDroits} />
  </EditGuesser>
)

export default UserComposterEdit
