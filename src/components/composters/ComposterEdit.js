import React, { useState } from 'react'
import { EditGuesser, InputGuesser } from '@api-platform/admin'
import { required, BooleanInput, ImageField, NumberInput, ReferenceField, ReferenceInput, SelectInput, TextInput } from 'react-admin'

import { enumBroyat, enumStatus } from '../Enums'
import MapInput from '../MapInput'
import imageSelector from './ImageSelector'

const ComposterEdit = props => {
  const [image, setImage] = useState(null)
  return (
    <>
      <EditGuesser {...props}>
        <InputGuesser source="name" validate={required()} />
        <ReferenceField source="image" reference="media_objects">
          <ImageField source="contentUrl" style={{ display: image ? 'none' : 'block' }} />
        </ReferenceField>
        {imageSelector(image, setImage)}
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
        <InputGuesser source="address" validate={required()} />
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
    </>
  )
}

export default ComposterEdit
