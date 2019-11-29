import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { MenuItemLink } from 'react-admin'

const LinkToComposter = ({ resource, record }) => {
  return <MenuItemLink to={`/composters?filter={"equipement":"${record.id}"}`} primaryText="Voir les composteurs" />
}

const EquipementsList = props => (
  <ListGuesser {...props} sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source="type" />
    <FieldGuesser source="capacite" />
    <LinkToComposter />
  </ListGuesser>
)

export default EquipementsList
