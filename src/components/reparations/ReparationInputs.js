import React from 'react'
import { InputGuesser } from '@api-platform/admin'
import { required, ReferenceInput, AutocompleteInput, BooleanInput } from 'react-admin'

export default [
  <BooleanInput source="done" />,
  <InputGuesser source="date" validate={required()} />,
  <InputGuesser source="description" validate={required()} />,
  <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
    <AutocompleteInput optionValue="@id" />
  </ReferenceInput>,
  <InputGuesser source="refFacture" />,
  <InputGuesser source="montant" />
]
