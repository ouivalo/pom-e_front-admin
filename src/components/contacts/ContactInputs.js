import React from 'react'
import { InputGuesser } from '@api-platform/admin'
import { ReferenceInput, AutocompleteArrayInput } from 'react-admin'

export default [
  <InputGuesser source="firstName" />,
  <InputGuesser source="lastName" />,
  <InputGuesser source="phone" />,
  <InputGuesser source="email" />,
  <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
    <AutocompleteArrayInput optionValue="@id" />
  </ReferenceInput>,
  <InputGuesser source="role" />,
  <InputGuesser source="contactType" />
]
