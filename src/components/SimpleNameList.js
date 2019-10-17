import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { MenuItemLink } from 'react-admin'
import { stringify } from 'query-string'

const LinkToComposter = ({ resource, record }) => {
  const resourceNoLastS = resource.slice(0, -1)
  return (
    <MenuItemLink
      to={{
        pathname: '/composters',
        search: stringify({
          page: 1,
          perPage: 25,
          filter: JSON.stringify({ [resourceNoLastS]: record.id })
        })
      }}
      primaryText="Voir les composteurs"
    />
  )
}

const SimpleNameList = props => (
  <ListGuesser {...props} sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source="name" label="Nom" />
    <LinkToComposter />
  </ListGuesser>
)

export default SimpleNameList
