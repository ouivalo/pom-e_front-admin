import React from 'react'
import {
  BooleanField,
  BooleanInput,
  Datagrid,
  EditButton,
  Filter,
  List,
  SelectField,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin'

import { enumRoles } from '../Enums'

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
  <List {...props} filters={<UserFilter />} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <TextField source="username" sortable={false} />
      <TextField source="email" sortable={false} />
      <NameField label={'resources.users.fields.fullname'} {...props} sortable={false} />
      <TextField source="phone" sortable={false} />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="username" addLabel />
      <TextField source="email" addLabel />
      <TextField source="firstname" addLabel />
      <TextField source="lastname" addLabel />
      <TextField source="phone" addLabel />
      <SelectField source="roles" choices={enumRoles} addLabel />
      <BooleanField source="enabled" label={'resources.users.fields.isEnabled'} addLabel />
    </SimpleShowLayout>
  </Show>
)

export { UserList, UserShow }
