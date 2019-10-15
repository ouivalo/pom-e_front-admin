import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { MenuItemLink } from 'react-admin'

const LinkToComposter = ({ resource, record }) => {
  const resourceNoLastS = resource.slice(0, -1)
  return <MenuItemLink to={`/composters?filter={"${resourceNoLastS}":"${record.id}"}`} primaryText="Voir les composteurs" />
}

const SimpleNameList = props => (
  <ListGuesser {...props} sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source="name" label="Nom" />
    <LinkToComposter />
  </ListGuesser>
)

export default SimpleNameList
