import React, { Fragment } from 'react'
import { FormDataConsumer, REDUX_FORM_NAME } from 'react-admin'
import { change } from 'redux-form'

import MediasSelectDialog from '../medias/MediasSelectDialog'

const imageSelector = (image, setImage) => {
  return (
    <Fragment>
      {image && (
        <span
          style={{
            backgroundImage: `url(${image.contentUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '10rem',
            display: 'block',
            margin: '0.5rem'
          }}
        />
      )}
      <FormDataConsumer>
        {({ dispatch }) => (
          <Fragment>
            <MediasSelectDialog
              onSelected={img => {
                setImage(img)
                dispatch(change(REDUX_FORM_NAME, 'image', img.id))
              }}
            />
          </Fragment>
        )}
      </FormDataConsumer>
    </Fragment>
  )
}

export default imageSelector
