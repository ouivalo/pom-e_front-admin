import React from 'react'
import { FieldGuesser } from '@api-platform/admin'
import {
  Show,
  TextField,
  SelectField,
  TabbedShowLayout,
  Tab,
  ReferenceField,
  ReferenceArrayField,
  Datagrid,
  EditButton,
  ReferenceManyField,
  translate,
  ImageField
} from 'react-admin'

import { enumStatus } from './Enums'
import MapField from './MapField'

const EquipementField = ({ record = {} }) => (
  <span>
    {record.type} {record.capacite}
  </span>
)

const ComposterShow = ({ translate, ...props }) => {
  return (
    <Show title="C ouf" {...props}>
      <TabbedShowLayout>
        <Tab label="Informations">
          <ReferenceField source="image" reference="media_objects" addLabel={false}>
            <ImageField source="contentUrl" />
          </ReferenceField>
          <TextField source="name" addLabel={true} />
          <SelectField source="status" choices={enumStatus} addLabel={true} />
          <TextField source="serialNumber" addLabel={true} />
          <FieldGuesser source="DateMiseEnRoute" addLabel={true} />
          <FieldGuesser source="DateInauguration" addLabel={true} />
          <FieldGuesser source="DateInstallation" addLabel={true} />
          <FieldGuesser source="permanencesDescription" addLabel={true} />
          <FieldGuesser source="acceptNewMembers" addLabel={true} />
          <FieldGuesser source="description" addLabel={true} />
          <FieldGuesser source="publicDescription" addLabel={true} />
          <ReferenceField source="financeur" reference="financeurs">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="commune" reference="communes">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="pole" reference="poles">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="quartier" reference="quartiers">
            <TextField source="name" />
          </ReferenceField>
          <FieldGuesser source="address" addLabel={true} label="Adresse" />
          <MapField />
        </Tab>
        <Tab label="Suivi">
          <ReferenceField source="mc" reference="users">
            <TextField source="username" />
          </ReferenceField>
          <ReferenceField source="equipement" reference="equipements">
            <EquipementField source="type" />
          </ReferenceField>
          <FieldGuesser source="openingProcedures" addLabel={true} />
          <ReferenceArrayField source="suivis" reference="suivis">
            <Datagrid>
              <FieldGuesser source="date" sortable={false} />
              <FieldGuesser source="description" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField source="livraisonBroyats" reference="livraison_broyats">
            <Datagrid>
              <FieldGuesser source="date" sortable={false} />
              <FieldGuesser source="quantite" sortable={false} />
              <FieldGuesser source="livreur" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField source="reparations" reference="reparations">
            <Datagrid>
              <FieldGuesser source="date" sortable={false} />
              <FieldGuesser source="done" sortable={false} />
              <FieldGuesser source="description" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
        </Tab>
        <Tab label="Contact">
          <ReferenceManyField label="Utilisateurs" reference="user_composters" target="composter" source="rid">
            <Datagrid>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.username')}>
                <FieldGuesser source="username" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.lastname')}>
                <FieldGuesser source="lastname" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.firstname')}>
                <FieldGuesser source="firstname" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.email')}>
                <FieldGuesser source="email" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.phone')}>
                <FieldGuesser source="phone" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.role')}>
                <FieldGuesser source="role" />
              </ReferenceField>
              <FieldGuesser source="capability" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <ReferenceManyField label="Contacts" reference="contacts" target="composters" source="slug">
            <Datagrid>
              <FieldGuesser source="firstName" />
              <FieldGuesser source="lastName" />
              <FieldGuesser source="phone" />
              <FieldGuesser source="email" />
              <FieldGuesser source="role" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default translate(ComposterShow)
