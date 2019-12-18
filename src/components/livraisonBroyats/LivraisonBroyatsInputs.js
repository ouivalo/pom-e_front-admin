import React from 'react'
import { InputGuesser } from '@api-platform/admin'
import { ReferenceInput, required, AutocompleteInput, SelectInput } from 'react-admin'

export default [
  <InputGuesser source="date" validate={required()} />,
  <InputGuesser source="quantite" validate={required()} />,
  <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
    <AutocompleteInput optionValue="@id" />
  </ReferenceInput>,
  <ReferenceInput source="livreur" reference="approvisionnement_broyats">
    <SelectInput optionText="name" />
  </ReferenceInput>
]
