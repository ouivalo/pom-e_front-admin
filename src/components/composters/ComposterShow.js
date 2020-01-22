import React from 'react'
import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  ImageField,
  ReferenceArrayField,
  ReferenceField,
  ReferenceManyField,
  SelectField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
  translate
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
const EquipementField = ({ record = {} }) => <span>{record && `${record.type} ${record.capacite}`}</span>

const ComposterShow = ({ translate, ...props }) => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Informations">
          <ReferenceField source="image" reference="media_objects" addLabel={false} allowEmpty>
            <ImageField source="contentUrl" />
          </ReferenceField>
          <TextField source="name" addLabel />
          <SelectField source="status" choices={enumStatus} addLabel />
          <TextField source="serialNumber" addLabel />
          <TextField source="plateNumber" addLabel />
          <DateField source="DateMiseEnRoute" addLabel />
          <DateField source="DateInauguration" addLabel />
          <DateField source="DateInstallation" addLabel />
          <ReferenceField source="categorie" reference="categories" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="permanencesDescription" addLabel />
          <BooleanField source="acceptNewMembers" addLabel />
          <TextField source="description" addLabel />
          <TextField source="publicDescription" addLabel />
          <ReferenceField source="commune" reference="communes" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="pole" reference="poles" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="quartier" reference="quartiers" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="address" addLabel label="Adresse" />
          <MapField />
        </Tab>
        <Tab label="Suivi">
          <ReferenceField source="financeur" reference="financeurs" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="financeurSuivi" reference="financeurs" allowEmpty linkType="show">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="mc" reference="users" linkType="show">
            <TextField source="username" />
          </ReferenceField>
          <ReferenceField source="equipement" reference="equipements" allowEmpty linkType="show">
            <EquipementField source="type" />
          </ReferenceField>
          <TextField source="openingProcedures" addLabel />
          <SelectField source="broyatLevel" choices={enumBroyat} addLabel />
          <ReferenceArrayField source="suivis" reference="suivis">
            <Datagrid>
              <DateField source="date" sortable={false} />
              <TextField source="description" sortable={false} />
              <NoteField source="animation" sortable={false} />
              <NoteField source="environnement" sortable={false} />
              <NoteField source="technique" sortable={false} />
              <NoteField source="autonomie" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceField source="approvisionnementBroyat" allowEmpty reference="approvisionnement_broyats">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceArrayField source="livraisonBroyats" reference="livraison_broyats">
            <Datagrid>
              <DateField source="date" sortable={false} />
              <TextField source="quantite" sortable={false} />
              <ReferenceField source="livreur" reference="approvisionnement_broyats" linkType={false} allowEmpty sortable={false}>
                <TextField source="name" />
              </ReferenceField>
              <EditButton />
            </Datagrid>
          </ReferenceArrayField>
          <ReferenceArrayField source="reparations" reference="reparations">
            <Datagrid>
              <DateField source="date" sortable={false} />
              <BooleanField source="done" sortable={false} />
              <TextField source="description" sortable={false} />
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
                <TextField source="username" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.lastname')}>
                <TextField source="lastname" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.firstname')}>
                <TextField source="firstname" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.email')}>
                <TextField source="email" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.phone')}>
                <TextField source="phone" />
              </ReferenceField>
              <ReferenceField source="user" reference="users" sortable={false} label={translate('resources.users.fields.roles')}>
                <TextField source="role" />
              </ReferenceField>
              <TextField source="capability" sortable={false} />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <ReferenceManyField label="Contacts" reference="contacts" target="composters" source="slug">
            <Datagrid>
              <TextField source="firstName" />
              <TextField source="lastName" />
              <TextField source="phone" />
              <TextField source="email" />
              <TextField source="role" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default translate(ComposterShow)
