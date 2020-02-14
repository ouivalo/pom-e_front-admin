import React from 'react'
import { required, AutocompleteInput, Create, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin'

const noteChoices = [
  { id: 0, name: '0' },
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' }
]
const SuivisInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <DateInput source="date" validate={required()} />
    <TextInput source="description" validate={required()} />
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })} validate={required()}>
      <AutocompleteInput optionValue="@id" />
    </ReferenceInput>
    <SelectInput source="animation" choices={noteChoices} />
    <SelectInput source="environnement" choices={noteChoices} />
    <SelectInput source="technique" choices={noteChoices} />
    <SelectInput source="autonomie" choices={noteChoices} />
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
