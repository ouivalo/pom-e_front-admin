import React from 'react'
import { HydraAdmin, ResourceGuesser, ShowGuesser, FieldGuesser } from '@api-platform/admin'
import { ReferenceField, TextField } from 'react-admin'
import MapInput from './MapInput'

const ComposterShow = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source="name" addLabel={true} label="Nom" />
    <FieldGuesser source="shortDescription" addLabel={true} label="Description courte" />
    <FieldGuesser source="description" addLabel={true} label="Description" />
    <FieldGuesser source="address" addLabel={true} label="Adresse" />
    <FieldGuesser source="lat" addLabel={true} label="Latitude" />
    <FieldGuesser source="lng" addLabel={true} label="Longitude" />
    <FieldGuesser source="permanences" addLabel={true} label="Permanences" />
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
    <FieldGuesser source="approvisionnementBroyat" addLabel={true} />
    <FieldGuesser source="animation" addLabel={true} />
    <FieldGuesser source="environnement" addLabel={true} />
    <FieldGuesser source="technique" addLabel={true} />
    <FieldGuesser source="autonomie" addLabel={true} />
    <FieldGuesser source="DateMiseEnRoute" addLabel={true} />
    <FieldGuesser source="DateInauguration" addLabel={true} />
    <FieldGuesser source="DateInstallation" addLabel={true} />
    <FieldGuesser source="LivraisonBroyats" addLabel={true} />
    <FieldGuesser source="suivis" addLabel={true} />
    <FieldGuesser source="reparations" addLabel={true} />
  </ShowGuesser>
)

export default ComposterShow
