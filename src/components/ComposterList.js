import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { TextField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin'

const ComposterFilter = props => (
  <Filter {...props}>
    <TextInput label="Recherche" source="name" alwaysOn />
    <ReferenceInput label="Commune" source="commune" reference="communes" alwaysOn>
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput label="Quartier" source="quartier" reference="quartiers">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput label="Pole" source="pole" reference="poles">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput label="Pavilions volume" source="pavilionsVolume" reference="pavilions_volumes">
      <SelectInput optionText="volume" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput label="Catégories" source="categorie" reference="categories">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
  </Filter>
)

const CompostersList = props => (
  <ListGuesser {...props} filters={<ComposterFilter />} sort={{ field: 'DateMiseEnRoute', order: 'DESC' }}>
    <FieldGuesser source="name" label="Nom" sortable={false} />
    <FieldGuesser source="DateMiseEnRoute" />
    <ReferenceField source="commune" reference="communes" linkType={false} allowEmpty={true} sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField source="quartier" reference="quartiers" linkType={false} allowEmpty={true} sortable={false}>
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
)

export default CompostersList
