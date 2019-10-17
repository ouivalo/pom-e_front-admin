import React from 'react'
import { HydraAdmin, dataProvider as baseDataProvider, fetchHydra as baseFetchHydra, ResourceGuesser } from '@api-platform/admin'
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation'
import frenchMessages from 'ra-language-french'
import { Redirect } from 'react-router-dom'
import { Room, Person, Archive, LocalShipping, Build, Pageview } from '@material-ui/icons'

import authProvider from './authProvider'
import compostriTheme from './theme'
import Layout from './components/Layout'
import ReviewsListComposter from './components/ComposterList'
import ReviewsListSimpleName from './components/SimpleNameList'
import ComposterEdit from './components/ComposterEdit'
import PavilionsVolumeList from './components/PavilionsVolumeList'
import Dashboard from './components/Dashboard'

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
    i18nProvider={() => frenchMessages}
    dashboard={Dashboard}
  >
    <ResourceGuesser name="composters" list={ReviewsListComposter} options={{ label: 'Composteurs' }} edit={ComposterEdit} icon={<Archive />} />
    <ResourceGuesser name="suivis" options={{ label: 'Suivis' }} icon={<Pageview />} />
    <ResourceGuesser name="livraison_broyats" options={{ label: 'Livraisons broyat' }} icon={<LocalShipping />} />
    <ResourceGuesser name="reparations" options={{ label: 'Réparations' }} icon={<Build />} />
    <ResourceGuesser name="users" list={PavilionsVolumeList} options={{ label: 'Utilisateurs', nextDivider: true }} icon={<Person />} />
    <ResourceGuesser name="quartiers" list={ReviewsListSimpleName} options={{ label: 'Quartiers' }} icon={<Room />} />
    <ResourceGuesser name="communes" list={ReviewsListSimpleName} options={{ label: 'Communes' }} icon={<Room />} />
    <ResourceGuesser name="poles" list={ReviewsListSimpleName} options={{ label: 'Poles' }} icon={<Room />} />
    <ResourceGuesser name="pavilions_volumes" list={PavilionsVolumeList} options={{ label: 'Pavilons' }} icon={<Archive />} />
  </HydraAdmin>
)
