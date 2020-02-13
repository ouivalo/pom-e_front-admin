import React from 'react'
import { Datagrid, EditButton, List, MenuItemLink, ShowButton, TextField } from 'react-admin'
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
  <List {...props} sort={{ field: 'name', order: 'ASC' }} perPage={25}>
    <Datagrid>
      <TextField source="name" label="Nom" />
      <LinkToComposter />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default SimpleNameList
