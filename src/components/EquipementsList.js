import React from 'react'
import { Datagrid, EditButton, List, MenuItemLink, ShowButton, TextField } from 'react-admin'

const LinkToComposter = ({ record }) => {
  return <MenuItemLink to={`/composters?filter={"equipement":"${record.id}"}`} primaryText="Voir les composteurs" />
}

const EquipementsList = props => (
  <List {...props} sort={{ field: 'name', order: 'ASC' }}>
    <Datagrid>
      <TextField source="type" />
      <TextField source="capacite" />
      <LinkToComposter />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default EquipementsList
