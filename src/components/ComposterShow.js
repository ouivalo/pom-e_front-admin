import React from 'react'
import { HydraAdmin, ResourceGuesser, ShowGuesser, FieldGuesser } from '@api-platform/admin'
import { ReferenceField, TextField } from 'react-admin'
import MapField from './MapField'
import NoteField from './NoteField'

const ComposterShow = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source="name" addLabel={true} label="Nom" />
    <FieldGuesser source="shortDescription" addLabel={true} label="Description courte" />
    <FieldGuesser source="description" addLabel={true} label="Description" />
    <FieldGuesser source="address" addLabel={true} label="Adresse" />
    <ReferenceField label="Commune" source="commune" reference="communes">
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField label="Pole" source="pole" reference="poles">
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField label="Quartier" source="quartier" reference="quartiers">
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField label="Volume" source="pavilionsVolume" reference="pavilions_volumes">
      <TextField source="volume" />
    </ReferenceField>
    <ReferenceField label="Maitre composter" source="mc" reference="users">
      <TextField source="username" />
    </ReferenceField>
    <FieldGuesser source="cadena" addLabel={true} />
    <NoteField source="animation" addLabel={true} />
    <NoteField source="environnement" addLabel={true} />
    <NoteField source="technique" addLabel={true} />
    <NoteField source="autonomie" addLabel={true} />
    <FieldGuesser source="DateMiseEnRoute" addLabel={true} />
    <FieldGuesser source="DateInauguration" addLabel={true} />
    <FieldGuesser source="DateInstallation" addLabel={true} />
    <FieldGuesser source="lat" addLabel={true} label="Latitude" />
    <FieldGuesser source="lng" addLabel={true} label="Longitude" />
    <MapField />
  </ShowGuesser>
)

export default ComposterShow
