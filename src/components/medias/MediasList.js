import React from 'react'
import { DeleteWithConfirmButton, ImageField, List } from 'react-admin'
import { Grid, List as ListMat, ListItem, ListItemText } from '@material-ui/core'

const MediaGrid = ({ ids, data, basePath }) => (
  <Grid container>
    {ids.map((id) => {
      const record = data[id]
      return (
        <Grid key={id} item xs={12} sm={6} md={3} style={{ marginBottom: '1rem' }}>
          <ImageField record={record} source="contentUrl" src="contentUrl" />
          {record.composters.length > 0 ? (
            <ListMat dense>
              {record.composters.map((c) => (
                <ListItem>
                  <ListItemText primary={c.name} />
                </ListItem>
              ))}
            </ListMat>
          ) : (
            'Pas de composteur'
          )}
          <DeleteWithConfirmButton resource="media_objects" basePath={basePath} record={record} />
        </Grid>
      )
    })}
  </Grid>
)

const MediasList = (props) => (
  <List title="Les images" {...props} exporter={false} perPage={25} sort={{ field: 'id', order: 'DESC' }}>
    <MediaGrid />
  </List>
)

export default MediasList
