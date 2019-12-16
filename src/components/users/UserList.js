import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { BooleanInput, Filter, TextInput } from 'react-admin'

const NameField = ({ record }) => <span>{`${record.firstname ? record.firstname : ''} ${record.lastname ? record.lastname : ''}`}</span>

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label={'resources.users.search'} source="username" alwaysOn />
    <TextInput source="email" alwaysOn />
    <TextInput source="lastname" />
    <TextInput source="firstname" />
    <TextInput source="phone" />
    <BooleanInput source="enabled" label={'resources.users.fields.isEnabled'} defaultValue={true} />
  </Filter>
)

const UserList = props => (
  <ListGuesser {...props} filters={<UserFilter />} sort={{ field: 'id', order: 'ASC' }}>
    <FieldGuesser source="username" />
    <FieldGuesser source="email" />
    <NameField label={'resources.users.fields.fullname'} {...props} />
    <FieldGuesser source="phone" />
  </ListGuesser>
)

export default UserList
