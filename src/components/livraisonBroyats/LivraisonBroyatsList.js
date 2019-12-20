import React from 'react'
import { Datagrid, DateField, EditButton, List, ShowButton, TextField, ReferenceField } from 'react-admin'

const LivraisonBroyatsList = props => (
  <List {...props}>
    <Datagrid>
      <DateField source="date" />
      <TextField source="quantite" sortable={false} />
      <ReferenceField source="composter" reference="composters" linkType="show" allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default LivraisonBroyatsList
