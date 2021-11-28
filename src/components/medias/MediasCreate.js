import React from 'react'
import { Create, SimpleForm, ImageInput, ImageField } from 'react-admin'

const MediasCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <ImageInput source="media_objects" accept="image/*">
        <ImageField source="file" src="file" />
      </ImageInput>
    </SimpleForm>
  </Create>
)

export default MediasCreate
