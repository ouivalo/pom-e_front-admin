import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { MenuItemLink } from 'react-admin'

const LinkToComposter = ({ resource, record }) => {
  return <MenuItemLink to={`/composters?filter={"equipement":"${record.id}"}`} primaryText="Voir les composteurs" />
}

const SimpleNameList = props => (
  <ListGuesser {...props} sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source="volume" label="Nom" />
    <LinkToComposter />
  </ListGuesser>
)

export default SimpleNameList
