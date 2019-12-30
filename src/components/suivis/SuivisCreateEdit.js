import React from 'react'
import { required, AutocompleteInput, Create, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin'

const SuivisInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <DateInput source="date" validate={required()} />
    <TextInput source="description" validate={required()} />
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })} validate={required()}>
      <AutocompleteInput optionValue="@id" />
    </ReferenceInput>
    <NumberInput source="animation" />
    <NumberInput source="environnement" />
    <NumberInput source="technique" />
    <NumberInput source="autonomie" />
  </SimpleForm>
)

const SuivisCreate = props => (
  <Create {...props}>
    <SuivisInputs {...props} />
  </Create>
)

const SuivisEdit = props => (
  <Edit {...props}>
    <SuivisInputs {...props} />
  </Edit>
)

export { SuivisCreate, SuivisEdit }
