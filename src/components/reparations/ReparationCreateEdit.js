import React from 'react'
import { required, AutocompleteInput, BooleanInput, Create, Edit, DateInput, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin'
import { parse } from 'query-string'

const ReparationFields = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => {
  const { composter } = parse(rest.location.search)

  return (
    <SimpleForm
      {...rest}
      redirect={composter ? `/composters/${encodeURIComponent(composter)}/show/1` : 'list'}
      defaultValue={{ date: new Date(), done: false, composter }}
    >
      <BooleanInput source="done" />
      <DateInput source="date" validate={required()} />
      <TextInput source="description" validate={required()} multiline />
      <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={(name) => ({ name })} validate={required()}>
        <AutocompleteInput optionValue="@id" />
      </ReferenceInput>
      <TextInput source="refFacture" />
      <NumberInput source="montant" />
    </SimpleForm>
  )
}

const ReparationCreate = (props) => (
  <Create {...props}>
    <ReparationFields {...props} />
  </Create>
)

const ReparationEdit = (props) => (
  <Edit {...props}>
    <ReparationFields {...props} />
  </Edit>
)

export { ReparationCreate, ReparationEdit }
