import React from 'react'
import { dataProvider as baseDataProvider, fetchHydra as baseFetchHydra } from '@api-platform/admin'
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation'
import { Redirect } from 'react-router-dom'

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadFeature = requestHandler => (type, resource, params) => {
  // Gestion des medias
  if (type === 'CREATE' && resource === 'media_objects') {
    // notice that following condition can be true only when `<ImageInput source="pictures" />` component has parameter `multiple={true}`
    // if parameter `multiple` is false, then data.pictures is not an array, but single object
    if (params.data.media_objects.file) {
      // only freshly dropped pictures are instance of File
      const newPicture = params.data.media_objects.rawFile

      return convertFileToBase64(newPicture)
        .then(base64Picture => ({
          data: base64Picture,
          imageName: newPicture.name
        }))
        .then(transformedNewPicture => {
          return requestHandler(type, resource, {
            ...params,
            data: transformedNewPicture
          })
        })
    }
  }

  // for other request types and resources, fall back to the default request handler
  return requestHandler(type, resource, params)
}

const entrypoint = process.env.REACT_APP_API_ENTRYPOINT

const fetchHydra = (url, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
  })

const apiDocumentationParser = entrypoint =>
  parseHydraDocumentation(entrypoint, {
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
  }).then(
    ({ api }) => ({ api }),
    result => {
      switch (result.status) {
        case 401:
          localStorage.removeItem('token')
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

const dataProvider = addUploadFeature(baseDataProvider(entrypoint, fetchHydra, apiDocumentationParser))

export default dataProvider
