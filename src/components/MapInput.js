import React, { useState } from 'react'
import { FormDataConsumer, REDUX_FORM_NAME } from 'react-admin'
import { change } from 'redux-form'
import RoomIcon from '@material-ui/icons/Room'
import ReactMapGL, { Marker } from 'react-map-gl'

const MapInput = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    zoom: 12
  })

  return (
    <FormDataConsumer>
      {({ formData, dispatch, ...rest }) => {
        // Je ne sais pas pourquoi défois "formData" est undifined
        const defaultLat = formData ? formData.lat : 47.214293
        const defaultLng = formData ? formData.lng : -1.537765
        const defautViewport = { latitude: defaultLat, longitude: defaultLng, ...viewport }
        return (
          <ReactMapGL
            {...defautViewport}
            {...rest}
            mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
            onViewportChange={value => setViewport(value)}
          >
            <Marker
              latitude={defaultLat}
              longitude={defaultLng}
              draggable={true}
              offsetLeft={-17.5}
              offsetTop={-35}
              onDragEnd={event => {
                const lngLat = event.lngLat
                dispatch(change(REDUX_FORM_NAME, 'lng', lngLat[0]))
                dispatch(change(REDUX_FORM_NAME, 'lat', lngLat[1]))
              }}
            >
              <RoomIcon color="primary" fontSize="large" />
            </Marker>
          </ReactMapGL>
        )
      }}
    </FormDataConsumer>
  )
}

export default MapInput
