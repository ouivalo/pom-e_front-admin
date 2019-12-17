import React from 'react'
import { ListGuesser } from '@api-platform/admin'
import { Filter, ReferenceField, SelectField, SelectInput, TextField, TextInput } from 'react-admin'
import { enumDroits } from '../Enums'

const UserComposterFilter = props => (
  <Filter {...props}>
    <TextInput label={'resources.users.search'} source="user.username" alwaysOn />
    <TextInput label={'resources.composters.search'} source="composter.name" alwaysOn />
    <SelectInput source="capability" choices={enumDroits} />
  </Filter>
)

const UserComposterList = props => (
  <ListGuesser {...props} filters={<UserComposterFilter />} sort={{ field: 'id', order: 'ASC' }}>
    <ReferenceField source="user" reference="users" linkType={'show'}>
      <TextField source="username" />
    </ReferenceField>
    <ReferenceField source="composter" reference="composters" linkType={'show'}>
      <TextField source="name" />
    </ReferenceField>
    <SelectField source="capability" choices={enumDroits} addLabel />
  </ListGuesser>
)

export default UserComposterList
