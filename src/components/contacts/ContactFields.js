import React from 'react'
import { required, AutocompleteArrayInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

import { enumContactType } from '../Enums'

const ComposterFields = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="firstName" />
    <TextInput source="lastName" />
    <TextInput source="phone" />
    <TextInput source="email" validate={required()} />
    <TextInput source="role" />
    <SelectInput source="contactType" choices={enumContactType} validate={required()} />
    <ReferenceInput source="composters" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
      <AutocompleteArrayInput optionValue="@id" />
    </ReferenceInput>
  </SimpleForm>
)

export default ComposterFields
