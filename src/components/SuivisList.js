import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { TextField, ReferenceField } from 'react-admin'
import NoteField from './NoteField'

const SuivisList = props => (
  <ListGuesser {...props}>
    <FieldGuesser source="date" />
    <FieldGuesser source="description" />
    <ReferenceField source="composter" reference="composters">
      <TextField source="name" />
    </ReferenceField>
    <NoteField source="animation" />
    <NoteField source="environnement" />
    <NoteField source="technique" />
    <NoteField source="autonomie" />
  </ListGuesser>
)

export default SuivisList
