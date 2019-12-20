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
  <List {...props}>
    <Datagrid>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="phone" sortable={false} />
      <TextField source="email" />
      <LinkToComposter />
      <SelectField source="contactType" choices={enumContactType} addLabel />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default ContactList
