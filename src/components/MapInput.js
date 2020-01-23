import React, { useState } from 'react'
import { FormDataConsumer } from 'react-admin'
import { useForm } from 'react-final-form'
import RoomIcon from '@material-ui/icons/Room'
import ReactMapGL, { Marker } from 'react-map-gl'

const MapInput = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    zoom: 12
  })

  const form = useForm()

  return (
    <FormDataConsumer>
      {({ formData, dispatch, ...rest }) => {
        const defaultLat = formData && formData.lat && parseFloat(formData.lat) ? parseFloat(formData.lat) : 47.214293
        const defaultLng = formData && formData.lng && parseFloat(formData.lng) ? parseFloat(formData.lng) : -1.537765
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
                form.change('lng', lngLat[0])
                form.change('lat', lngLat[1])
              }}
            >
              <RoomIcon color="primary" />
            </Marker>
          </ReactMapGL>
        )
      }}
    </FormDataConsumer>
  )
}

export default MapInput
