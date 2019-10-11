import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { TextField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

const useStyles = makeStyles({
  note: {
    color: '#fff',
    textAlign: 'center'
  },
  note0: {
    backgroundColor: theme.palette.secondary.main
  },
  note1: {
    backgroundColor: theme.palette.secondary.main
  },
  note2: {
    backgroundColor: '#FBB447'
  },
  note3: {
    backgroundColor: theme.palette.primary.main
  }
})

const ComposterFilter = props => (
  <Filter {...props}>
    <TextInput label="Recherche" source="name" alwaysOn />
    <ReferenceInput label="Commune" source="commune" reference="communes" alwaysOn>
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
  </Filter>
)

const NoteField = props => {
  const classes = useStyles()
  return <TextField className={[classes[`note${props.record[props.source]}`], classes.note]} {...props} />
}

const ReviewsList = props => (
  <ListGuesser {...props} filters={<ComposterFilter />} sort={{ field: 'DateMiseEnRoute', order: 'DESC' }}>
    <FieldGuesser source="name" label="Nom" sortable={false} />
    <FieldGuesser source="DateMiseEnRoute" />
    <ReferenceField source="commune" reference="communes" linkType={false} allowEmpty={true} sortable={false}>
      <TextField source="name" />
    </ReferenceField>
    <NoteField source="animation" sortable={false} />
    <NoteField source="environnement" sortable={false} />
    <NoteField source="technique" sortable={false} />
    <NoteField source="autonomie" sortable={false} />
  </ListGuesser>
)

export default ReviewsList
