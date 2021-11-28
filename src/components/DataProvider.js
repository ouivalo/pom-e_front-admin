import React from 'react'
import { hydraDataProvider as baseHydraDataProvider, fetchHydra as baseFetchHydra, useIntrospection } from '@api-platform/admin'
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation'
import { Redirect, Route } from 'react-router-dom'

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT
const getHeaders = () =>
  localStorage.getItem('token')
    ? {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    : {}
const fetchHydra = (url, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: getHeaders,
  })
const RedirectToLogin = () => {
  const introspect = useIntrospection()

  if (localStorage.getItem('token')) {
    introspect()
    return <></>
  }
  return <Redirect to="/login" />
}

const apiDocumentationParser = async (entrypoint) => {
  try {
    const { api } = await parseHydraDocumentation(entrypoint, { headers: getHeaders })
    return { api }
  } catch (result) {
    if (result.status === 401) {
      // Prevent infinite loop if the token is expired
      localStorage.removeItem('token')

      return {
        api: result.api,
        customRoutes: [<Route path="/" component={RedirectToLogin} />],
      }
    }

    throw result
  }
}

const baseDataProvider = baseHydraDataProvider(entrypoint, fetchHydra, apiDocumentationParser, true)
const dataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === 'media_objects' && params.data.media_objects && params.data.media_objects.file) {
      // Freshly dropped pictures are File objects and must be converted to base64 strings
      const newPicture = params.data.media_objects.rawFile

      return convertFileToBase64(newPicture)
        .then((base64Picture) => ({
          data: base64Picture,
          imageName: newPicture.name,
        }))
        .then((transformedNewPicture) => {
          return baseDataProvider.create(resource, {
            ...params,
            data: transformedNewPicture,
          })
        })
    }
    // Ici c'est le default
    return baseDataProvider.create(resource, params)
  },
}

export default dataProvider
