import React from 'react'
import { Card, CardContent, Grid, CardHeader, Button, List, ListItem, ListItemText, Typography, withStyles } from '@material-ui/core'
import { More } from '@material-ui/icons'
import { Query, Loading, MenuItemLink } from 'react-admin'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

const Dashboard = ({ classes }) => {
  const payload = {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'DateMiseEnRoute', order: 'DESC' }
  }

  return (
    <>
      <Grid container spacing={8}>
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
                      <Button variant="outlined" color="primary">
                        Voir tous <More className={[classes.rightIcon, classes.iconSmall]} />
                      </Button>
                    }
                    title={`${total} Composteurs `}
                  />
                  <CardContent>
                    <Typography variant="subheading">Derniers composteurs mis en route</Typography>
                    <List>
                      {data &&
                        data.map(composter => (
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
                      <Button variant="outlined" color="primary">
                        Voir tous <More className={[classes.rightIcon, classes.iconSmall]} />
                      </Button>
                    }
                    title={`${total} Réparations `}
                  />
                  <CardContent>
                    <Typography variant="subheading">Réparations a venir</Typography>
                    <List>
                      {data &&
                        data.map(reparation => (
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
    </>
  )
}

export default withStyles(styles)(Dashboard)
