import React from 'react'
import { required, AutocompleteInput, DateInput, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

const LivraisonBroyatsFields = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <DateInput source="date" validate={required()} />
    <NumberInput source="quantite" validate={required()} />
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={name => ({ name })}>
      <AutocompleteInput optionValue="@id" />
    </ReferenceInput>
    <ReferenceInput source="livreur" reference="approvisionnement_broyats">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </SimpleForm>
)

export default LivraisonBroyatsFields
