import React from 'react'
import { FieldGuesser, ShowGuesser } from '@api-platform/admin'
import { ReferenceField } from 'react-admin'

const SuivisShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source="date" addLabel />
      <FieldGuesser source="description" addLabel />
      <ReferenceField source="composter" reference="composters">
        <FieldGuesser source="name" />
      </ReferenceField>
      <FieldGuesser source="animation" addLabel />
      <FieldGuesser source="environnement" addLabel />
      <FieldGuesser source="technique" addLabel />
      <FieldGuesser source="autonomie" addLabel />
    </ShowGuesser>
  )
}

export default SuivisShow
