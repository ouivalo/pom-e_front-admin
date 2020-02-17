import React from 'react'
import { DeleteWithConfirmButton, ImageField, List } from 'react-admin'
import { Grid } from '@material-ui/core'

const MediaGrid = ({ ids, data, basePath }) => (
  <Grid container>
    {ids.map(id => (
      <Grid key={id} item xs={12} sm={6} md={3} style={{ marginBottom: '1rem' }}>
        <ImageField record={data[id]} source="contentUrl" src="contentUrl" />
        <DeleteWithConfirmButton resource="media_objects" basePath={basePath} record={data[id]} />
      </Grid>
    ))}
  </Grid>
)

const MediasList = props => (
  <List title="Les images" {...props} exporter={false} perPage={25} sort={{ field: 'id', order: 'DESC' }}>
    <MediaGrid />
  </List>
)

export default MediasList
