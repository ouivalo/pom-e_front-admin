import React from 'react'
import { HydraAdmin, ResourceGuesser } from '@api-platform/admin'
import { Route } from 'react-router-dom'
import frenchMessages from 'ra-language-french'
import { Room, Person, Archive, LocalShipping, Build, Pageview, Style, Contacts, Photo, PersonOutline, EuroSymbol, LocationCity } from '@material-ui/icons'

import SimpleNameList from './components/SimpleNameList'
import EquipementsList from './components/EquipementsList'
import Dashboard from './components/Dashboard'
import dataProvider from './components/DataProvider'
import Layout from './components/Layout'
import frenchResourcesTranslation from './i18n/fr'
import authProvider from './authProvider'
import compostriTheme from './theme'

import { ComposterCreate, ComposterList, ComposterShow, ComposterEdit } from './components/composters'
import { ContactList, ContactCreate, ContactEdit, ContactShow } from './components/contacts'
import { FinanceurCreate, FinanceurEdit, FinanceurShow } from './components/financeurs'
import { LivraisonBroyatsCreate, LivraisonBroyatsEdit, LivraisonBroyatsShow, LivraisonBroyatsList } from './components/livraisonBroyats'
import { MediasCreate, MediasList } from './components/medias'
import { ReparationList, ReparationEdit, ReparationCreate, ReparationShow } from './components/reparations'
import { SuivisList, SuivisShow, SuivisEdit, SuivisCreate } from './components/suivis'
import { UserCreate, UserEdit, UserList, UserShow } from './components/users'
import { UserComposterCreate, UserComposterEdit, UserComposterList } from './components/usersComposters'
import { ProfileEdit } from './components/profile'

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
    customRoutes={[<Route key="profile" path="/mon-profile" component={ProfileEdit} />]}
  >
    <ResourceGuesser
      name="composters"
      create={ComposterCreate}
      edit={ComposterEdit}
      show={ComposterShow}
      list={ComposterList}
      options={{ label: 'Composteurs' }}
      icon={<Archive />}
    />
    <ResourceGuesser
      name="suivis"
      create={SuivisCreate}
      edit={SuivisEdit}
      show={SuivisShow}
      list={SuivisList}
      options={{ label: 'Suivis' }}
      icon={<Pageview />}
    />
    <ResourceGuesser
      name="livraison_broyats"
      create={LivraisonBroyatsCreate}
      edit={LivraisonBroyatsEdit}
      show={LivraisonBroyatsShow}
      list={LivraisonBroyatsList}
      options={{ label: 'Livraisons broyat' }}
      icon={<LocalShipping />}
    />
    <ResourceGuesser
      name="reparations"
      create={ReparationCreate}
      edit={ReparationEdit}
      show={ReparationShow}
      list={ReparationList}
      options={{ label: 'Réparations' }}
      icon={<Build />}
    />
    <ResourceGuesser name="users" list={UserList} create={UserCreate} show={UserShow} edit={UserEdit} options={{ label: 'Utilisateurs' }} icon={<Person />} />
    <ResourceGuesser
      name="user_composters"
      create={UserComposterCreate}
      edit={UserComposterEdit}
      list={UserComposterList}
      options={{ label: 'Utilisateurs/composteurs' }}
      icon={<PersonOutline />}
    />
    <ResourceGuesser
      name="contacts"
      create={ContactCreate}
      edit={ContactEdit}
      show={ContactShow}
      list={ContactList}
      options={{ label: 'Contacts' }}
      icon={<Contacts />}
    />
    <ResourceGuesser name="media_objects" create={MediasCreate} list={MediasList} options={{ label: 'Images', nextDivider: true }} icon={<Photo />} />
    <ResourceGuesser name="poles" list={SimpleNameList} options={{ label: 'Poles' }} icon={<Room />} />
    <ResourceGuesser name="quartiers" list={SimpleNameList} options={{ label: 'Quartiers' }} icon={<Room />} />
    <ResourceGuesser name="communes" list={SimpleNameList} options={{ label: 'Communes' }} icon={<LocationCity />} />
    <ResourceGuesser name="categories" options={{ label: 'Catégories' }} list={SimpleNameList} icon={<Style />} />
    <ResourceGuesser name="equipements" list={EquipementsList} options={{ label: 'Équipement' }} icon={<Archive />} />
    <ResourceGuesser name="approvisionnement_broyats" options={{ label: 'Appro Broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser
      name="financeurs"
      create={FinanceurCreate}
      edit={FinanceurEdit}
      show={FinanceurShow}
      list={SimpleNameList}
      options={{ label: 'Financeurs' }}
      icon={<EuroSymbol />}
    />
  </HydraAdmin>
)
