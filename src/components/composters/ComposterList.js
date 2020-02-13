import React from 'react'
import { Datagrid, EditButton, ShowButton, List, SelectField, TextField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin'

import { enumBroyat, enumStatus } from '../Enums'

const ComposterFilter = props => (
  <Filter {...props}>
    <TextInput source="name" alwaysOn />
    <TextInput source="serialNumber" />
    <ReferenceInput source="commune" reference="communes" alwaysOn>
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="quartier" reference="quartiers">
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="pole" reference="poles">
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="categorie" reference="categories">
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="financeur" reference="financeurs">
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="financeurSuivi" reference="financeurs">
      <SelectInput optionText="name" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="composterContact" reference="contacts">
      <SelectInput optionText="firstName" optionValue="id" helperText="" />
    </ReferenceInput>
    <ReferenceInput source="equipement" reference="equipements">
      <SelectInput
        optionText={record => (
          <span>
            {record.type} {record.capacite}
          </span>
        )}
        optionValue="id"
        helperText=""
      />
    </ReferenceInput>
    <SelectInput source="broyatLevel" choices={enumBroyat} helperText="" />
  </Filter>
)

const ComposterList = props => (
  <List {...props} filters={<ComposterFilter />} sort={{ field: 'serialNumber', order: 'DESC' }}>
    <Datagrid>
      <TextField source="serialNumber" />
      <TextField source="name" sortable={false} />
      <ReferenceField source="commune" reference="communes" link={false} allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="quartier" reference="quartiers" link={false} allowEmpty sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <SelectField source="status" choices={enumStatus} addLabel />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

export default ComposterList
