import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { TextField, ReferenceField } from 'react-admin'

const LivraisonBroyatsList = props => (
  <ListGuesser {...props}>
    <FieldGuesser source="date" />
    <FieldGuesser source="quantite" sortable={false} />
    <ReferenceField source="composter" reference="composters" linkType="show" allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
)

export default LivraisonBroyatsList
