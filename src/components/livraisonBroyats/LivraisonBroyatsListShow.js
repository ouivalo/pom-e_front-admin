import React from 'react'
import { Datagrid, DateField, EditButton, List, ReferenceField, Show, ShowButton, SimpleShowLayout, TextField } from 'react-admin'

const LivraisonBroyatsFields = [
  <DateField source="date" addLabel />,
  <TextField source="quantite" addLabel />,
  <ReferenceField source="composter" reference="composters" linkType="show" allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
  <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>
]

const LivraisonBroyatsList = props => (
  <List {...props}>
    <Datagrid>
      {LivraisonBroyatsFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const LivraisonBroyatsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>{LivraisonBroyatsFields}</SimpleShowLayout>
  </Show>
)

export { LivraisonBroyatsList, LivraisonBroyatsShow }
