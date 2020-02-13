import React from 'react'
import { Datagrid, DateField, EditButton, List, ReferenceField, Show, ShowButton, SimpleShowLayout, TextField } from 'react-admin'
import NoteField from '../NoteField'

const SuivisFields = [
  <DateField source="date" addLabel />,
  <TextField source="description" addLabel sortable={false} />,
  <ReferenceField source="composter" reference="composters" link="show" sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
  <NoteField source="animation" addLabel sortable={false} />,
  <NoteField source="environnement" addLabel sortable={false} />,
  <NoteField source="technique" addLabel sortable={false} />,
  <NoteField source="autonomie" addLabel sortable={false} />
]

const SuivisList = props => (
  <List {...props} perPage={25}>
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
