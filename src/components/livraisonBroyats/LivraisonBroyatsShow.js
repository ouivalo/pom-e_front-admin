import React from 'react'
import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin'

const LivraisonBroyatsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="date" addLabel />
      <TextField source="quantite" addLabel />
      <ReferenceField source="composter" reference="composters" linkType="show" allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
)

export default LivraisonBroyatsShow
