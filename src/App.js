import React from 'react'
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin'
import frenchMessages from 'ra-language-french'
import { Resource } from 'react-admin'
import { Room, Person, Archive, LocalShipping, Build, Pageview, Style, AccessTime, Contacts, MonetizationOn, Photo, PersonOutline } from '@material-ui/icons'

import authProvider from './authProvider'
import compostriTheme from './theme'
import Layout from './components/Layout'
import { SuivisList, SuivisShow, SuivisEdit, SuivisCreate } from './components/suivis'
import { ReparationList, ReparationEdit, ReparationCreate, ReparationShow } from './components/reparations'
import PermanencesList from './components/PermanencesList'
import PermanencesShow from './components/PermanencesShow'
import SimpleNameList from './components/SimpleNameList'
import EquipementsList from './components/EquipementsList'
import Dashboard from './components/Dashboard'
import frenchResourcesTranslation from './i18n/fr'
import MediasList from './components/MediasList'
import MediasCreate from './components/MediasCreate'
import dataProvider from './components/DataProvider'

import { ComposterCreate, ComposterList, ComposterShow, ComposterEdit } from './components/composters'
import { FinanceurShow } from './components/financeurs'
import { UserCreate, UserEdit, UserList, UserShow } from './components/users'
import { UserComposterCreate, UserComposterEdit, UserComposterList } from './components/usersComposters'
import { ContactList, ContactCreate, ContactEdit, ContactShow } from './components/contacts'

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT

export default () => (
  <HydraAdmin
    dataProvider={dataProvider}
    authProvider={authProvider}
    entrypoint={entrypoint}
    appLayout={Layout}
    theme={compostriTheme}
    i18nProvider={() => ({ ...frenchMessages, ...frenchResourcesTranslation })}
    dashboard={Dashboard}
  >
    <ResourceGuesser
      name="composters"
      create={ComposterCreate}
      list={ComposterList}
      options={{ label: 'Composteurs' }}
      edit={ComposterEdit}
      icon={<Archive />}
      show={ComposterShow}
    />
    <ResourceGuesser
      name="suivis"
      list={SuivisList}
      show={SuivisShow}
      edit={SuivisEdit}
      create={SuivisCreate}
      options={{ label: 'Suivis' }}
      icon={<Pageview />}
    />
    <ResourceGuesser name="livraison_broyats" options={{ label: 'Livraisons broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser
      name="reparations"
      list={ReparationList}
      edit={ReparationEdit}
      show={ReparationShow}
      create={ReparationCreate}
      options={{ label: 'Réparations' }}
      icon={<Build />}
    />
    <ResourceGuesser name="permanences" list={PermanencesList} show={PermanencesShow} options={{ label: 'Permanences' }} icon={<AccessTime />} />
    <ResourceGuesser name="users" list={UserList} create={UserCreate} show={UserShow} edit={UserEdit} options={{ label: 'Utilisateurs' }} icon={<Person />} />
    <ResourceGuesser
      name="user_composters"
      list={UserComposterList}
      create={UserComposterCreate}
      edit={UserComposterEdit}
      options={{ label: 'Utilisateurs/composteurs' }}
      icon={<PersonOutline />}
    />
    <ResourceGuesser name="financeurs" list={SimpleNameList} show={FinanceurShow} options={{ label: 'Financeurs' }} icon={<MonetizationOn />} />
    <ResourceGuesser
      name="contacts"
      list={ContactList}
      create={ContactCreate}
      edit={ContactEdit}
      show={ContactShow}
      options={{ label: 'Contacts' }}
      icon={<Contacts />}
    />
    <ResourceGuesser name="financeurs" list={SimpleNameList} options={{ label: 'Financeurs' }} icon={<MonetizationOn />} />
    <Resource name="media_objects" list={MediasList} create={MediasCreate} options={{ label: 'Images', nextDivider: true }} icon={<Photo />} />
    <ResourceGuesser name="quartiers" list={SimpleNameList} options={{ label: 'Quartiers' }} icon={<Room />} />
    <ResourceGuesser name="communes" list={SimpleNameList} options={{ label: 'Communes' }} icon={<Room />} />
    <ResourceGuesser name="poles" list={SimpleNameList} options={{ label: 'Poles' }} icon={<Room />} />
    <ResourceGuesser name="categories" options={{ label: 'Catégories' }} list={SimpleNameList} icon={<Style />} />
    <ResourceGuesser name="equipements" list={EquipementsList} options={{ label: 'Équipement' }} icon={<Archive />} />
    <ResourceGuesser name="approvisionnement_broyats" options={{ label: 'Appro Broyat' }} icon={<LocalShipping />} />
  </HydraAdmin>
)
