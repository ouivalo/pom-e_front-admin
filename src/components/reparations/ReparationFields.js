import React from 'react'
import { FieldGuesser } from '@api-platform/admin'
import { ReferenceField } from 'react-admin'

export default [
  <FieldGuesser source="done" addLabel />,
  <FieldGuesser source="date" addLabel />,
  <FieldGuesser source="description" addLabel />,
  <ReferenceField source="composter" reference="composters">
    <FieldGuesser source="name" />
  </ReferenceField>,
  <FieldGuesser source="refFacture" addLabel />,
  <FieldGuesser source="montant" addLabel />
]
