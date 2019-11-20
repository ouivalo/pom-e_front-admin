import React from 'react'
import { FieldGuesser } from '@api-platform/admin'
import { Show, TextField, TabbedShowLayout, Tab, ReferenceField, ReferenceArrayField, Datagrid, EditButton, ReferenceManyField } from 'react-admin'
import MapField from './MapField'

const ComposterShow = props => {
  return (
    <Show title="C ouf" {...props}>
      <TabbedShowLayout>
        <Tab label="Informations">
          <TextField source="name" addLabel={true} />
          <FieldGuesser source="DateMiseEnRoute" addLabel={true} />
          <FieldGuesser source="DateInauguration" addLabel={true} />
          <FieldGuesser source="DateInstallation" addLabel={true} />
          <FieldGuesser source="shortDescription" addLabel={true} label="Description courte" />
          <FieldGuesser source="description" addLabel={true} label="Description" />
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
          <ReferenceField source="pavilionsVolume" reference="pavilions_volumes">
            <TextField source="volume" />
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
              <ReferenceField source="user" reference="users" sortable={false} label="Nom">
                <FieldGuesser source="username" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label="Email">
                <FieldGuesser source="email" />
              </ReferenceField>
              <FieldGuesser source="capability" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default ComposterShow
