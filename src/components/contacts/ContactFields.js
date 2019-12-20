import React from 'react'
import { AutocompleteArrayInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin'

const ComposterFields = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="firstName" />
    <TextInput source="lastName" />
    <TextInput source="phone" />
    <TextInput source="email" />
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
      <AutocompleteArrayInput optionValue="@id" />
    </ReferenceInput>
    <TextInput source="role" />
    <TextInput source="contactType" />
  </SimpleForm>
)

export default ComposterFields
