import React from 'react'
import { InputGuesser } from '@api-platform/admin'
import { required, ReferenceInput, AutocompleteInput } from 'react-admin'

export default [
  <InputGuesser source="date" validate={required()} />,
  <InputGuesser source="description" validate={required()} />,
  <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
    <AutocompleteInput optionValue="@id" />
  </ReferenceInput>,
  <InputGuesser source="animation" />,
  <InputGuesser source="environnement" />,
  <InputGuesser source="technique" />,
  <InputGuesser source="autonomie" />
]
