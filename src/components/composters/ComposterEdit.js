import React from 'react'
import { EditGuesser, InputGuesser } from '@api-platform/admin'
import { ReferenceInput, SelectInput, BooleanInput, NumberInput, TextInput } from 'react-admin'

import { enumBroyat, enumStatus } from '../Enums'
import MapInput from '../MapInput'

const ComposterEdit = props => (
  <EditGuesser {...props}>
    <InputGuesser source="name" />
    <SelectInput source="status" choices={enumStatus} />
    <InputGuesser source="serialNumber" />
    <TextInput source="plateNumber" />
    <InputGuesser source="DateMiseEnRoute" />
    <InputGuesser source="DateInauguration" />
    <InputGuesser source="DateInstallation" />
    <InputGuesser source="permanencesDescription" />
    <InputGuesser source="acceptNewMembers" />
    <InputGuesser source="description" />
    <InputGuesser source="publicDescription" />
    <ReferenceInput source="financeur" reference="financeurs">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="financeurSuivi" reference="financeurs">
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
    <NumberInput source="nbFoyersPotentiels" />
    <NumberInput source="nbInscrit" />
    <NumberInput source="nbDeposant" />
    <BooleanInput source="signaletiqueRond" />
    <BooleanInput source="signaletiquePanneau" />
    <BooleanInput source="hasCroc" />
    <BooleanInput source="hasCadenas" />
    <BooleanInput source="hasFourche" />
    <BooleanInput source="hasThermometre" />
    <InputGuesser source="lat" />
    <InputGuesser source="lng" />
    <MapInput />
  </EditGuesser>
)

export default ComposterEdit
