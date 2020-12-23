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
  TextInput,
  SelectInput,
  useTranslate,
} from 'react-admin'
import { Chip } from '@material-ui/core'

import { enumRoles } from '../Enums'

const NameField = ({ record }) => <span>{`${record.firstname ? record.firstname : ''} ${record.lastname ? record.lastname : ''}`}</span>

const ComposterField = ({ record }) => {
  const translate = useTranslate()
  return record.userComposters.map((item) => {
    const capability = translate(`resources.users.fields.enumDroits.${item.capability.toLowerCase()}`)
    return <Chip key={item['@id']} label={`${capability} : ${item.composter && item.composter.name}`} />
  })
}

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label={'resources.users.search'} source="username" alwaysOn />
    <TextInput source="email" alwaysOn />
    <TextInput source="userComposters.composter.name" label="Composteur" />
    <TextInput source="lastname" />
    <TextInput source="firstname" />
    <SelectInput source="roles" choices={enumRoles} />
    <BooleanInput source="enabled" label={'resources.users.fields.isEnabled'} defaultValue={true} />
  </Filter>
)

const UserList = (props) => {
  return (
    <List {...props} filters={<UserFilter />} sort={{ field: 'id', order: 'ASC' }} perPage={25}>
      <Datagrid>
        <TextField source="username" sortable={false} />
        <TextField source="email" sortable={false} />
        <NameField label={'resources.users.fields.fullname'} {...props} sortable={false} />
        <TextField source="phone" sortable={false} />
        <ComposterField source="userComposters" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  )
}

const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="username" addLabel />
      <TextField source="email" addLabel />
      <TextField source="firstname" addLabel />
      <TextField source="lastname" addLabel />
      <TextField source="phone" addLabel />
      <SelectField source="roles" choices={enumRoles} addLabel />
      <BooleanField source="enabled" label={'resources.users.fields.isEnabled'} addLabel />
      <BooleanField source="hasFormationReferentSite" label={'resources.users.fields.hasFormationReferentSite'} addLabel />
      <BooleanField source="hasFormationGuideComposteur" label={'resources.users.fields.hasFormationGuideComposteur'} addLabel />
    </SimpleShowLayout>
  </Show>
)

export { UserList, UserShow }
