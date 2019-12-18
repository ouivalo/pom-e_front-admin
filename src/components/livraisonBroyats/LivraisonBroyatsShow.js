import React from 'react'
import { ShowGuesser, FieldGuesser } from '@api-platform/admin'
import { TextField, ReferenceField } from 'react-admin'

const LivraisonBroyatsShow = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source="date" addLabel />
    <FieldGuesser source="quantite" addLabel />
    <ReferenceField source="composter" reference="composters" linkType="show" allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
  </ShowGuesser>
)

export default LivraisonBroyatsShow
