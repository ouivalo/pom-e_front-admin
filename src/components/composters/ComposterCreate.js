import React, { useState } from 'react'
import { required, BooleanInput, Create, DateField, ImageField, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'

import { enumBroyat, enumStatus } from '../Enums'
import MapInput from '../MapInput'
import imageSelector from './ImageSelector'

const ComposterCreate = props => {
  const [image, setImage] = useState(null)
  return (
    <Create {...props}>
      <SimpleForm redirect="show">
        <TextInput source="name" validate={required()} />
        <ReferenceInput source="image" reference="media_objects">
          <ImageField source="contentUrl" style={{ display: image ? 'none' : 'block' }} />
        </ReferenceInput>
        {imageSelector(image, setImage)}
        <SelectInput source="status" choices={enumStatus} defaultValue={enumStatus[0].id} />
        <TextInput source="serialNumber" />
        <TextInput source="plateNumber" />
        <DateField source="DateMiseEnRoute" />
        <DateField source="DateInauguration" />
        <DateField source="DateInstallation" />
        <TextInput source="permanencesDescription" />
        <BooleanInput source="acceptNewMembers" defaultValue={true} />
        <TextInput source="description" />
        <TextInput source="publicDescription" />
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
        <TextInput source="address" validate={required()} />
        <ReferenceInput source="mc" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <ReferenceInput source="equipement" reference="equipements">
          <SelectInput optionText={record => `${record.type} ${record.capacite}`} />
        </ReferenceInput>
        <TextInput source="openingProcedures" />
        <SelectInput source="broyatLevel" choices={enumBroyat} defaultValue={enumBroyat[0].id} />
        <TextInput source="lat" />
        <TextInput source="lng" />
        <NumberInput source="nbFoyersPotentiels" />
        <NumberInput source="nbInscrit" />
        <NumberInput source="nbDeposant" />
        <BooleanInput source="signaletiqueRond" />
        <BooleanInput source="signaletiquePanneau" />
        <BooleanInput source="hasCroc" />
        <BooleanInput source="hasCadenas" />
        <BooleanInput source="hasFourche" />
        <BooleanInput source="hasThermometre" />
        <MapInput />
      </SimpleForm>
    </Create>
  )
}

export default ComposterCreate
