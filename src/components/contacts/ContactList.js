import React from 'react'
import { Datagrid, EditButton, List, MenuItemLink, SelectField, ShowButton, TextField } from 'react-admin'
import { stringify } from 'query-string'

import { enumContactType } from '../Enums'

const LinkToComposter = ({ record }) => {
  return (
    <MenuItemLink
      to={{
        pathname: '/composters',
        search: stringify({
          page: 1,
          perPage: 25,
          filter: JSON.stringify({ composterContact: record.id })
        })
      }}
      primaryText="Voir les composteurs"
    />
  )
}

const ContactList = props => (
  <List {...props} perPage={25}>
    <Datagrid>
      <TextField source="firstName" sortable={false} />
      <TextField source="lastName" sortable={false} />
      <TextField source="phone" sortable={false} />
      <TextField source="email" sortable={false} />
      <LinkToComposter />
      <SelectField source="contactType" choices={enumContactType} addLabel sortable={false} />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default ContactList
