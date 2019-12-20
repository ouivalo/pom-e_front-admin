import React from 'react'
import { Datagrid, DateField, EditButton, List, ReferenceField, Show, ShowButton, SimpleShowLayout, TextField } from 'react-admin'
import NoteField from '../NoteField'

const SuivisFields = [
  <DateField source="date" addLabel />,
  <TextField source="description" addLabel />,
  <ReferenceField source="composter" reference="composters">
    <TextField source="name" />
  </ReferenceField>,
  <NoteField source="animation" addLabel />,
  <NoteField source="environnement" addLabel />,
  <NoteField source="technique" addLabel />,
  <NoteField source="autonomie" addLabel />
]

const SuivisList = props => (
  <List {...props}>
    <Datagrid>
      {SuivisFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const SuivisShow = props => (
  <Show {...props}>
    <SimpleShowLayout>{SuivisFields}</SimpleShowLayout>
  </Show>
)

export { SuivisList, SuivisShow }
