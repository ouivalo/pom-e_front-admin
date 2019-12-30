import React from 'react'
import { required, AutocompleteInput, Create, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

const LivraisonBroyatsInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <DateInput source="date" validate={required()} />
    <NumberInput source="quantite" validate={required()} />
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })} validate={required()}>
      <AutocompleteInput optionValue="@id" />
    </ReferenceInput>
    <ReferenceInput source="livreur" reference="approvisionnement_broyats">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </SimpleForm>
)

const LivraisonBroyatsCreate = props => (
  <Create {...props}>
    <LivraisonBroyatsInputs {...props} />
  </Create>
)

const LivraisonBroyatsEdit = props => (
  <Edit {...props}>
    <LivraisonBroyatsInputs {...props} />
  </Edit>
)

export { LivraisonBroyatsCreate, LivraisonBroyatsEdit }
