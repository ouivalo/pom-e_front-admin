import React from 'react'
import { required, AutocompleteInput, Create, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'
import { parse } from 'query-string'

const LivraisonBroyatsInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => {
  const { composter } = parse(rest.location.search)

  return (
    <SimpleForm {...rest} redirect={composter ? `/composters/${encodeURIComponent(composter)}/show/1` : 'show'} defaultValue={{ date: new Date(), composter }}>
      <DateInput source="date" validate={required()} />
      <NumberInput source="quantite" validate={required()} />
      <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={(name) => ({ name })} validate={required()}>
        <AutocompleteInput optionValue="@id" />
      </ReferenceInput>
      <ReferenceInput source="livreur" reference="approvisionnement_broyats">
        <SelectInput optionText="name" optionValue="@id" />
      </ReferenceInput>
    </SimpleForm>
  )
}

const LivraisonBroyatsCreate = (props) => (
  <Create {...props}>
    <LivraisonBroyatsInputs {...props} />
  </Create>
)

const LivraisonBroyatsEdit = (props) => (
  <Edit {...props}>
    <LivraisonBroyatsInputs {...props} />
  </Edit>
)

export { LivraisonBroyatsCreate, LivraisonBroyatsEdit }
