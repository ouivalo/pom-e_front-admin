import React from 'react'
import { EditGuesser, InputGuesser } from '@api-platform/admin'
import { ReferenceInput, SelectInput, DisabledInput } from 'react-admin'
import MapInput from './MapInput'

const ComposterEdit = props => (
  <EditGuesser {...props}>
    <DisabledInput label="Id" source="id" />
    <InputGuesser source="name" label="Nom" />
    <InputGuesser source="shortDescription" />
    <InputGuesser source="description" />
    <InputGuesser source="address" />

    <InputGuesser source="permanences" />
    <ReferenceInput label="Commune" source="commune" reference="communes">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Pole" source="pole" reference="poles">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Quartier" source="quartier" reference="quartiers">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Volume" source="pavilionsVolume" reference="pavilions_volumes">
      <SelectInput optionText="volume" />
    </ReferenceInput>
    <ReferenceInput label="Maitre composter" source="mc" reference="users">
      <SelectInput optionText="username" />
    </ReferenceInput>
    <InputGuesser source="cadena" />
    <InputGuesser source="animation" />
    <InputGuesser source="environnement" />
    <InputGuesser source="technique" />
    <InputGuesser source="autonomie" />
    <InputGuesser source="DateMiseEnRoute" />
    <InputGuesser source="DateInauguration" />
    <InputGuesser source="DateInstallation" />
    <InputGuesser source="lat" />
    <InputGuesser source="lng" />
    <MapInput />
  </EditGuesser>
)

export default ComposterEdit
