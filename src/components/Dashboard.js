import React from 'react'
import { Card, CardContent, Grid, CardHeader, IconButton, List, ListItem, ListItemText, ListItemIcon, Tooltip } from '@material-ui/core'
import { More, Add, LocalShipping } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useQuery, Loading, BooleanField, translate } from 'react-admin'
import { stringify } from 'query-string'

const BroyatLevelWidget = translate(({ translate, handleClick }) => {
  const history = useHistory()
  const { data, loading, loaded, total } = useQuery({
    type: 'getList',
    resource: 'composters',
    payload: { pagination: { page: 1, perPage: 10 }, sort: { field: 'DateMiseEnRoute', order: 'DESC' }, filter: { broyatLevel: ['Empty', 'Reserve'] } }
  })
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardHeader
          title={loaded ? `${total} Niveau broyat faible` : 'Niveau broyat faible'}
          action={
            <Tooltip title="Voir tous les composteurs avec niveau de broyat vide">
              <IconButton
                color="primary"
                onClick={() =>
                  history.push(
                    '/composters?' +
                      stringify({
                        page: 1,
                        perPage: 25,
                        filter: JSON.stringify({ broyatLevel: 'Empty' })
                      })
                  )
                }
              >
                <More />
              </IconButton>
            </Tooltip>
          }
        />
        <CardContent>
          {loading && <Loading />}
          {loaded && data && (
            <List>
              {data.map(composter => (
                <ListItem key={composter.id} button onClick={() => history.push(`/composters/${composter.id.replace(/\//g, '%2F')}/show`)}>
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
          )}
        </CardContent>
      </Card>
    </Grid>
  )
})

const ReparationWidget = () => {
  const history = useHistory()
  const { data, loading, loaded, total } = useQuery({
    type: 'getList',
    resource: 'reparations',
    payload: { pagination: { page: 1, perPage: 10 }, sort: { field: 'date', order: 'ASC' }, filter: { done: false } }
  })

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardHeader
          action={
            <>
              <Tooltip title="Ajouter une réparation">
                <IconButton color="primary" onClick={() => history.push('/reparations/create')}>
                  <Add />
                </IconButton>
              </Tooltip>
              <Tooltip title="Voir toutes les réparations a prévoire">
                <IconButton
                  color="primary"
                  onClick={() =>
                    history.push(
                      '/reparations?' +
                        stringify({
                          page: 1,
                          perPage: 25,
                          filter: JSON.stringify({ done: 'false' })
                        })
                    )
                  }
                >
                  <More />
                </IconButton>
              </Tooltip>
            </>
          }
          title={loaded ? `${total} Réparations à prévoire` : 'Réparations'}
        />
        <CardContent>
          {loading && <Loading />}
          <List>
            {data &&
              data.map(reparation => {
                const date = reparation.date ? new Date(reparation.date) : null
                return (
                  <ListItem key={reparation.id} button onClick={() => history.push(`/reparations/${reparation.id.replace(/\//g, '%2F')}/show`)}>
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
    </Grid>
  )
}

const CompostersWidget = () => {
  const history = useHistory()
  const { data, loading, loaded, total } = useQuery({
    type: 'getList',
    resource: 'composters',
    payload: { pagination: { page: 1, perPage: 10 }, sort: { field: 'DateMiseEnRoute', order: 'DESC' } }
  })

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardHeader
          action={
            <>
              <Tooltip title="Ajouter un composteur">
                <IconButton color="primary" onClick={() => history.push('/composters/create')}>
                  <Add />
                </IconButton>
              </Tooltip>
              <Tooltip title="Voir tous les composteurs">
                <IconButton color="primary" onClick={() => history.push('/composters')}>
                  <More />
                </IconButton>
              </Tooltip>
            </>
          }
          title={loaded ? `${total} Composteurs` : 'Composteurs'}
        />
        <CardContent>
          {loading && <Loading />}
          <List>
            {data &&
              data.map(composter => {
                const date = new Date(composter.DateMiseEnRoute)
                return (
                  <ListItem key={composter.id} button onClick={() => history.push(`/composters/${composter.id.replace(/\//g, '%2F')}/show`)}>
                    <ListItemText primary={`${composter.serialNumber} ${composter.name}`} secondary={`Mise en route: ${date.toLocaleDateString()}`} />
                  </ListItem>
                )
              })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <BroyatLevelWidget />
        <ReparationWidget />
        <CompostersWidget />
      </Grid>
    </>
  )
}

export default Dashboard
