import React from 'react'
import { Card, CardContent, Container, Grid, CardHeader, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { More } from '@material-ui/icons'
import { Query, Loading, MenuItemLink } from 'react-admin'

const Dashboard = ({ dataProvider }) => {
  const payload = {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'DateMiseEnRoute', order: 'DESC' }
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Query type="GET_LIST" resource="composters" payload={payload}>
            {({ data, total, loading, error }) => {
              if (loading) {
                return <Loading />
              }
              return (
                <Card>
                  <CardHeader
                    action={
                      <Button variant="outlined" color="primary" endIcon={<More />}>
                        Voir tous
                      </Button>
                    }
                    title={`${total} Composteurs `}
                  />
                  <CardContent>
                    <Typography variant="h6">Derniers composteurs mis en route</Typography>
                    <List>
                      {data.map(composter => (
                        <ListItem
                          key={composter.id}
                          component={MenuItemLink}
                          to={`/composters/${composter.id}/show`}
                          primaryText={<ListItemText primary={composter.name} />}
                        />
                      ))}
                    </List>
                  </CardContent>
                </Card>
              )
            }}
          </Query>
        </Grid>

        <Grid item xs={12} md={6}>
          <Query type="GET_LIST" resource="reparations" payload={payload}>
            {({ data, total, loading, error }) => {
              if (loading) {
                return <Loading />
              }
              return (
                <Card>
                  <CardHeader
                    action={
                      <Button variant="outlined" color="primary" endIcon={<More />}>
                        Voir tous
                      </Button>
                    }
                    title={`${total} Réparations `}
                  />
                  <CardContent>
                    <Typography variant="h6">Réparations a venir</Typography>
                    <List>
                      {data.map(reparation => (
                        <ListItem
                          key={reparation.id}
                          component={MenuItemLink}
                          to={`/reparations/${reparation.id}/show`}
                          primaryText={<ListItemText primary={reparation.description} />}
                        />
                      ))}
                    </List>
                  </CardContent>
                </Card>
              )
            }}
          </Query>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
