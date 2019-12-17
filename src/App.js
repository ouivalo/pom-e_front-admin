import React from 'react'
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin'
import frenchMessages from 'ra-language-french'
import { Resource } from 'react-admin'
import { Room, Person, Archive, LocalShipping, Build, Pageview, Style, AccessTime, VerifiedUser, Contacts, MonetizationOn, Photo } from '@material-ui/icons'

import authProvider from './authProvider'
import compostriTheme from './theme'
import Layout from './components/Layout'
import ComposterCreate from './components/ComposterCreate'
import ComposterList from './components/ComposterList'
import SuivisList from './components/SuivisList'
import ComposterShow from './components/ComposterShow'
import ComposterEdit from './components/ComposterEdit'
import ContactsList from './components/ContactsList'
import PermanencesList from './components/PermanencesList'
import PermanencesShow from './components/PermanencesShow'
import SimpleNameList from './components/SimpleNameList'
import EquipementsList from './components/EquipementsList'
import Dashboard from './components/Dashboard'
import frenchResourcesTranslation from './i18n/fr'
import MediasList from './components/MediasList'
import MediasCreate from './components/MediasCreate'
import dataProvider from './components/DataProvider'

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
    <ResourceGuesser name="suivis" list={SuivisList} options={{ label: 'Suivis' }} icon={<Pageview />} />
    <ResourceGuesser name="livraison_broyats" options={{ label: 'Livraisons broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser name="reparations" options={{ label: 'Réparations' }} icon={<Build />} />
    <ResourceGuesser name="permanences" list={PermanencesList} show={PermanencesShow} options={{ label: 'Permanences' }} icon={<AccessTime />} />
    <ResourceGuesser name="users" options={{ label: 'Utilisateurs' }} icon={<Person />} />
    <ResourceGuesser name="contacts" list={ContactsList} options={{ label: 'Contacts' }} icon={<Contacts />} />
    <ResourceGuesser name="financeurs" list={SimpleNameList} options={{ label: 'Financeurs' }} icon={<MonetizationOn />} />
    <Resource name="media_objects" list={MediasList} create={MediasCreate} options={{ label: 'Images', nextDivider: true }} icon={<Photo />} />
    <ResourceGuesser name="quartiers" list={SimpleNameList} options={{ label: 'Quartiers' }} icon={<Room />} />
    <ResourceGuesser name="communes" list={SimpleNameList} options={{ label: 'Communes' }} icon={<Room />} />
    <ResourceGuesser name="poles" list={SimpleNameList} options={{ label: 'Poles' }} icon={<Room />} />
    <ResourceGuesser name="categories" options={{ label: 'Catégories' }} list={SimpleNameList} icon={<Style />} />
    <ResourceGuesser name="equipements" list={EquipementsList} options={{ label: 'Équipement' }} icon={<Archive />} />
    <ResourceGuesser name="approvisionnement_broyats" options={{ label: 'Appro Broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser name="user_composters" options={{ label: 'Utilisateurs/composteurs' }} icon={<VerifiedUser />} />
  </HydraAdmin>
)
