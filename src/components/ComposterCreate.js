import React from 'react'
import { CreateGuesser, InputGuesser } from '@api-platform/admin'
import { BooleanInput, ReferenceInput, SelectInput } from 'react-admin'

import { enumBroyat, enumStatus } from './Enums'
import MapInput from './MapInput'

const ComposterCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <SelectInput source="status" choices={enumStatus} defaultValue={enumStatus[0].id} />
    <InputGuesser source="serialNumber" />
    <InputGuesser source="DateMiseEnRoute" />
    <InputGuesser source="DateInauguration" />
    <InputGuesser source="DateInstallation" />
    <InputGuesser source="permanencesDescription" />
    <BooleanInput source="acceptNewMembers" defaultValue={true} />
    <InputGuesser source="description" />
    <InputGuesser source="publicDescription" />
    <ReferenceInput source="financeur" reference="financeurs">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="commune" reference="communes">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="pole" reference="poles">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="quartier" reference="quartiers">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <InputGuesser source="address" />
    <ReferenceInput source="mc" reference="users">
      <SelectInput optionText="username" />
    </ReferenceInput>
    <ReferenceInput source="equipement" reference="equipements">
      <SelectInput optionText={record => `${record.type} ${record.capacite}`} />
    </ReferenceInput>
    <InputGuesser source="openingProcedures" />
    <SelectInput source="broyatLevel" choices={enumBroyat} defaultValue={enumBroyat[0].id} />
    <InputGuesser source="lat" />
    <InputGuesser source="lng" />
    <MapInput />
  </CreateGuesser>
)

export default ComposterCreate
