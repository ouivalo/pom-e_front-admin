import React from 'react'
import { HydraAdmin, dataProvider as baseDataProvider, fetchHydra as baseFetchHydra, ResourceGuesser } from '@api-platform/admin'
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation'
import frenchMessages from 'ra-language-french'
import { Redirect } from 'react-router-dom'
import { Room, Person, Archive, LocalShipping, Build, Pageview, Style, AccessTime, VerifiedUser } from '@material-ui/icons'

import authProvider from './authProvider'
import compostriTheme from './theme'
import Layout from './components/Layout'
import ComposterList from './components/ComposterList'
import ComposterShow from './components/ComposterShow'
import ComposterEdit from './components/ComposterEdit'
import ContactsList from './components/ContactsList'
import PermanencesList from './components/PermanencesList'
import PermanencesShow from './components/PermanencesShow'
import SimpleNameList from './components/SimpleNameList'
import PavilionsVolumeList from './components/PavilionsVolumeList'
import Dashboard from './components/Dashboard'
import frenchResourcesTranslation from './i18n/fr'

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT
const fetchHeaders = { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
const fetchHydra = (url, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders)
  })
const apiDocumentationParser = entrypoint =>
  parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) }).then(
    ({ api }) => ({ api }),
    result => {
      switch (result.status) {
        case 401:
          window.localStorage.removeItem('token')
          return Promise.resolve({
            api: result.api,
            customRoutes: [
              {
                props: {
                  path: '/',
                  render: () => <Redirect to={`/login`} />
                }
              }
            ]
          })

        default:
          return Promise.reject(result)
      }
    }
  )
const dataProvider = baseDataProvider(entrypoint, fetchHydra, apiDocumentationParser)

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
    <ResourceGuesser name="composters" list={ComposterList} options={{ label: 'Composteurs' }} edit={ComposterEdit} icon={<Archive />} show={ComposterShow} />
    <ResourceGuesser name="suivis" options={{ label: 'Suivis' }} icon={<Pageview />} />
    <ResourceGuesser name="livraison_broyats" options={{ label: 'Livraisons broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser name="reparations" options={{ label: 'Réparations' }} icon={<Build />} />
    <ResourceGuesser name="permanences" list={PermanencesList} show={PermanencesShow} options={{ label: 'Permanences' }} icon={<AccessTime />} />
    <ResourceGuesser name="contacts" list={ContactsList} options={{ label: 'Contacts' }} icon={<VerifiedUser />} />
    <ResourceGuesser name="users" list={PavilionsVolumeList} options={{ label: 'Utilisateurs', nextDivider: true }} icon={<Person />} />
    <ResourceGuesser name="quartiers" list={SimpleNameList} options={{ label: 'Quartiers' }} icon={<Room />} />
    <ResourceGuesser name="communes" list={SimpleNameList} options={{ label: 'Communes' }} icon={<Room />} />
    <ResourceGuesser name="poles" list={SimpleNameList} options={{ label: 'Poles' }} icon={<Room />} />
    <ResourceGuesser name="categories" options={{ label: 'Catégories' }} list={SimpleNameList} icon={<Style />} />
    <ResourceGuesser name="equipements" list={PavilionsVolumeList} options={{ label: 'Équipement' }} icon={<Archive />} />
    <ResourceGuesser name="user_composters" options={{ label: 'Utilisateurs/composteurs' }} icon={<VerifiedUser />} />
  </HydraAdmin>
)
