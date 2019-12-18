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
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { Done, Clear } from '@material-ui/icons'

import { enumBroyat, enumStatus } from '../Enums'
import MapField from '../MapField'
import NoteField from '../NoteField'

const FreqField = translate(({ translate, record, resource }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <Typography variant="title">Fréquentation / Capacité</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{translate(`resources.${resource}.fields.nbFoyersPotentiels`)}</TableCell>
            <TableCell>{translate(`resources.${resource}.fields.nbInscrit`)}</TableCell>
            <TableCell>{translate(`resources.${resource}.fields.nbDeposant`)}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{record.nbFoyersPotentiels}</TableCell>
            <TableCell>{record.nbInscrit}</TableCell>
            <TableCell>{record.nbDeposant}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
})

const BooleanArrayField = translate(({ translate, record, resource, fields, title }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <Typography variant="title">{title}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {fields.map(f => (
              <TableCell>{translate(`resources.${resource}.fields.${f}`)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {fields.map(f => (
              <TableCell>{record[f] ? <Done /> : <Clear />}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
})
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
          <TextField source="name" addLabel />
          <SelectField source="status" choices={enumStatus} addLabel />
          <TextField source="serialNumber" addLabel />
          <TextField source="plateNumber" addLabel />
          <FieldGuesser source="DateMiseEnRoute" addLabel />
          <FieldGuesser source="DateInauguration" addLabel />
          <FieldGuesser source="DateInstallation" addLabel />
          <FieldGuesser source="permanencesDescription" addLabel />
          <FieldGuesser source="acceptNewMembers" addLabel />
          <FieldGuesser source="description" addLabel />
          <FieldGuesser source="publicDescription" addLabel />
          <ReferenceField source="commune" reference="communes">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="pole" reference="poles">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="quartier" reference="quartiers">
            <TextField source="name" />
          </ReferenceField>
          <FieldGuesser source="address" addLabel label="Adresse" />
          <MapField />
        </Tab>
        <Tab label="Suivi">
          <ReferenceField source="financeur" reference="financeurs">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="financeurSuivi" reference="financeurs">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="mc" reference="users">
            <TextField source="username" />
          </ReferenceField>
          <ReferenceField source="equipement" reference="equipements">
            <EquipementField source="type" />
          </ReferenceField>
          <FieldGuesser source="openingProcedures" addLabel />
          <SelectField source="broyatLevel" choices={enumBroyat} addLabel />
          <ReferenceArrayField source="suivis" reference="suivis">
            <Datagrid>
              <FieldGuesser source="date" sortable={false} />
              <FieldGuesser source="description" sortable={false} />
              <NoteField source="animation" sortable={false} />
              <NoteField source="environnement" sortable={false} />
              <NoteField source="technique" sortable={false} />
              <NoteField source="autonomie" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceField source="approvisionnementBroyat" reference="approvisionnement_broyats">
            <TextField source="name" />
          </ReferenceField>
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
          <FreqField />
          <BooleanArrayField fields={['signaletiqueRond', 'signaletiquePanneau']} title="Signalétique" />
          <BooleanArrayField fields={['hasCroc', 'hasCadenas', 'hasFourche', 'hasThermometre', 'hasPeson']} title="Outillage présent" />
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
