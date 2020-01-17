import React from 'react'
import { Datagrid, EditButton, Filter, List, ReferenceField, SelectField, SelectInput, ShowButton, TextField, TextInput } from 'react-admin'
import { enumDroits } from '../Enums'

const UserComposterFilter = props => (
  <Filter {...props}>
    <TextInput label={'resources.users.fields.email'} source="user.email" alwaysOn />
    <TextInput label={'resources.user_composters.fields.composter'} source="composter.name" alwaysOn />
    <TextInput label={'resources.users.fields.lastname'} source="user.lastname" />
    <SelectInput source="capability" choices={enumDroits} />
  </Filter>
)

const UserComposterList = props => (
  <List {...props} filters={<UserComposterFilter />} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <ReferenceField source="user" reference="users" linkType={'show'}>
        <TextField source="username" />
      </ReferenceField>
      <ReferenceField source="composter" reference="composters" linkType={'show'}>
        <TextField source="name" />
      </ReferenceField>
      <SelectField source="capability" choices={enumDroits} addLabel />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default UserComposterList
