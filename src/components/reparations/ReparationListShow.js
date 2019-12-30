import React from 'react'
import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  EditButton,
  Filter,
  List,
  ReferenceField,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField
} from 'react-admin'

const ReparationFields = [
  <BooleanField source="done" addLabel />,
  <DateField source="date" addLabel />,
  <TextField source="description" addLabel />,
  <ReferenceField source="composter" reference="composters">
    <TextField source="name" />
  </ReferenceField>,
  <TextField source="refFacture" addLabel />,
  <TextField source="montant" addLabel />
]

const ReparationFilter = props => (
  <Filter {...props}>
    <BooleanInput source="done" defaultValue={false} />
  </Filter>
)

const ReparationList = props => (
  <List {...props} filters={<ReparationFilter />}>
    <Datagrid>
      {ReparationFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const ReparationShow = props => (
  <Show {...props}>
    <SimpleShowLayout>{ReparationFields}</SimpleShowLayout>
  </Show>
)

export { ReparationList, ReparationShow }
