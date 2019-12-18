import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { SelectField, TextField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin'

import { enumBroyat, enumStatus } from '../Enums'

const ComposterFilter = props => (
  <Filter {...props}>
    <TextInput label="Recherche" source="name" alwaysOn />
    <ReferenceInput source="commune" reference="communes" alwaysOn>
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="quartier" reference="quartiers">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="pole" reference="poles">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="categorie" reference="categories">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="financeur" reference="financeurs">
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="composterContact" reference="contacts">
      <SelectInput optionText="firstName" optionValue="id" />
    </ReferenceInput>
    <ReferenceInput source="equipement" reference="equipements">
      <SelectInput
        optionText={record => (
          <span>
            {record.type} {record.capacite}
          </span>
        )}
        optionValue="id"
      />
    </ReferenceInput>
    <SelectInput source="broyatLevel" choices={enumBroyat} />
  </Filter>
)

const ComposterList = props => (
  <ListGuesser {...props} filters={<ComposterFilter />} sort={{ field: 'DateMiseEnRoute', order: 'DESC' }}>
    <FieldGuesser source="serialNumber" />
    <FieldGuesser source="name" sortable={false} />
    <ReferenceField source="commune" reference="communes" linkType={false} allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField source="quartier" reference="quartiers" linkType={false} allowEmpty sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <SelectField source="status" choices={enumStatus} addLabel />
  </ListGuesser>
)

export default ComposterList
