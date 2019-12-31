import React from 'react'
import { Card, CardContent, Grid, CardHeader, Button, List, ListItem, ListItemText, ListItemIcon, Typography, withStyles } from '@material-ui/core'
import { More, Add, LocalShipping } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'
import { Query, Loading, BooleanField, translate, MenuItemLink } from 'react-admin'
import { stringify } from 'query-string'

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

const Dashboard = ({ classes, history, translate }) => {
  function handleClick(path) {
    history.push(path)
  }

  const payload = {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'DateMiseEnRoute', order: 'DESC' }
  }

  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Query
            type="GET_LIST"
            resource="composters"
            payload={{ pagination: { page: 1, perPage: 10 }, sort: { field: 'DateMiseEnRoute', order: 'DESC' }, filter: { broyatLevel: ['Empty', 'Reserve'] } }}
          >
            {({ data, total, loading, error }) => {
              if (loading) {
                return <Loading />
              }

              return (
                <Card>
                  <CardHeader
                    title={`${total} Niveau broyat faible`}
                    action={
                      <>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            handleClick(
                              '/composters?' +
                                stringify({
                                  page: 1,
                                  perPage: 25,
                                  filter: JSON.stringify({ broyatLevel: 'Empty' })
                                })
                            )
                          }
                        >
                          Voir tous <More className={[classes.rightIcon, classes.iconSmall].join(' ')} />
                        </Button>
                      </>
                    }
                  />
                  <CardContent>
                    <List>
                      {data &&
                        data.map(composter => (
                          <ListItem key={composter.id} button onClick={() => handleClick(`/composters/${composter.id.replace(/\//g, '%2F')}/show`)}>
                            <ListItemIcon>
                              <LocalShipping style={{ color: composter.broyatLevel === 'Empty' ? 'red' : 'orange' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={`${composter.serialNumber} ${composter.name}`}
                              secondary={translate(`resources.composters.fields.enumBroyat.${composter.broyatLevel.toLowerCase()}`)}
                            />
                          </ListItem>
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
                      <>
                        <Button variant="outlined" color="primary" onClick={() => handleClick('/reparations/create')}>
                          Ajouter <Add className={[classes.rightIcon, classes.iconSmall].join(' ')} />
                        </Button>
                        <Button variant="outlined" color="primary" onClick={() => handleClick('/reparations')}>
                          Voir tous <More className={[classes.rightIcon, classes.iconSmall].join(' ')} />
                        </Button>
                      </>
                    }
                    title={`${total} Réparations `}
                  />
                  <CardContent>
                    <Typography variant="subheading">Réparations a venir</Typography>
                    <List>
                      {data &&
                        data.map(reparation => {
                          const date = reparation.date ? new Date(reparation.date) : null
                          return (
                            <ListItem key={reparation.id} button onClick={() => handleClick(`/reparations/${reparation.id.replace(/\//g, '%2F')}/show`)}>
                              <ListItemIcon>
                                <BooleanField source="done" record={reparation} />
                              </ListItemIcon>
                              <ListItemText primary={`${reparation.description}`} secondary={date ? date.toLocaleDateString() : undefined} />
                            </ListItem>
                          )
                        })}
                    </List>
                  </CardContent>
                </Card>
              )
            }}
          </Query>
        </Grid>
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
                      <>
                        <Button variant="outlined" color="primary" onClick={() => handleClick('/composters/create')}>
                          Ajouter <Add className={[classes.rightIcon, classes.iconSmall].join(' ')} />
                        </Button>
                        <Button variant="outlined" color="primary" onClick={() => handleClick('/composters')}>
                          Voir tous <More className={[classes.rightIcon, classes.iconSmall].join(' ')} />
                        </Button>
                      </>
                    }
                    title={`${total} Composteurs `}
                  />
                  <CardContent>
                    <Typography variant="subheading">Derniers composteurs mis en route</Typography>
                    <List>
                      {data &&
                        data.map(composter => {
                          const date = new Date(composter.DateMiseEnRoute)
                          return (
                            <ListItem key={composter.id} button onClick={() => handleClick(`/composters/${composter.id.replace(/\//g, '%2F')}/show`)}>
                              <ListItemText primary={`${composter.serialNumber} ${composter.name}`} secondary={date.toLocaleDateString()} />
                            </ListItem>
                          )
                        })}
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

export default withStyles(styles)(translate(withRouter(Dashboard)))
