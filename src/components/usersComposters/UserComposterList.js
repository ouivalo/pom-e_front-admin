import React from 'react'
import {
  BooleanField,
  Datagrid,
  EditButton,
  Filter,
  List,
  SelectField,
  SelectInput,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin'
import { enumDroits } from '../Enums'

const UserComposterFilter = (props) => (
  <Filter {...props}>
    <TextInput label={'resources.users.fields.email'} source="user.email" alwaysOn />
    <TextInput label={'resources.user_composters.fields.composter'} source="composter.name" alwaysOn />
    <TextInput label={'resources.users.fields.lastname'} source="user.lastname" />
    <SelectInput source="capability" choices={enumDroits} />
  </Filter>
)

export const UserComposterList = (props) => (
  <List {...props} filters={<UserComposterFilter />} sort={{ field: 'id', order: 'ASC' }} perPage={25}>
    <Datagrid>
      <TextField source="user.username" />
      <TextField source="composter.name" />
      <SelectField source="capability" choices={enumDroits} addLabel sortable={false} />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export const UserComposterShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="user.username" />
      <TextField source="composter.name" />
      <SelectField source="capability" choices={enumDroits} addLabel sortable={false} />
      <BooleanField source="notif" />
    </SimpleShowLayout>
  </Show>
)
