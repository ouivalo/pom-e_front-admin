import React from 'react'
import { HydraAdmin, dataProvider as baseDataProvider, fetchHydra as baseFetchHydra, ResourceGuesser } from '@api-platform/admin'
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation'
import frenchMessages from 'ra-language-french'
import { Redirect } from 'react-router-dom'

import authProvider from './authProvider'
import compostriTheme from './theme'
import Layout from './components/Layout'
import ReviewsListComposter from './components/ReviewsListComposter'

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
  >
    <ResourceGuesser name="composters" list={ReviewsListComposter} />
    <ResourceGuesser name="communes" />
  </HydraAdmin>
)
