import React from 'react'
import { Datagrid, EditButton, List, MenuItemLink, ShowButton, TextField } from 'react-admin'

const LinkToComposter = ({ record }) => {
  return <MenuItemLink to={`/composters?filter={"equipement":"${record.id}"}`} primaryText="Voir les composteurs" />
}

const EquipementsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="type" sortable={false} />
      <TextField source="capacite" sortable={false} />
      <LinkToComposter />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default EquipementsList
