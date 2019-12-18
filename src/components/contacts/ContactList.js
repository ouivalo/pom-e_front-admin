import React from 'react'
import { ListGuesser } from '@api-platform/admin'
import ContactFields from './ContactFields'

import { MenuItemLink } from 'react-admin'
import { stringify } from 'query-string'

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
  <ListGuesser {...props}>
    {ContactFields}
    <LinkToComposter />
  </ListGuesser>
)

export default ContactList
