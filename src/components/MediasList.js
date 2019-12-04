import React from 'react'
import { Grid } from '@material-ui/core'
import { List, DeleteButton, ImageField } from 'react-admin'

const MediaGrid = ({ ids, data, basePath }) => (
  <Grid container>
    {ids.map(id => (
      <Grid item xs={12} sm={6} md={3}>
        <ImageField record={data[id]} source="contentUrl" src="contentUrl" />
        <DeleteButton resource="media_objects" basePath={basePath} record={data[id]} />
      </Grid>
    ))}
  </Grid>
)

const MediasList = props => (
  <List title="Les images" {...props} exporter={false} perPage={25}>
    <MediaGrid />
  </List>
)

export default MediasList
