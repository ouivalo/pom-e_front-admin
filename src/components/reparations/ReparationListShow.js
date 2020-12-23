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
  TextInput,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
  translate,
} from 'react-admin'

const ReparationFields = [
  <BooleanField source="done" addLabel sortable={false} />,
  <DateField source="date" addLabel />,
  <TextField source="description" addLabel sortable={false} />,
  <ReferenceField source="composter[@id]" label="Composteur" reference="composters" link="show" sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
  <TextField source="refFacture" addLabel sortable={false} />,
  <TextField source="montant" addLabel sortable={false} />,
]

const ReparationFilter = translate(({ translate, ...props }) => (
  <Filter {...props}>
    <BooleanInput source="done" defaultValue={false} alwaysOn />
    <TextInput source="composter.name" alwaysOn label={translate('resources.reparations.fields.composter')} />
  </Filter>
))

const ReparationList = (props) => (
  <List {...props} filters={<ReparationFilter />} sort={{ field: 'date', order: 'DESC' }} perPage={25}>
    <Datagrid>
      {ReparationFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const ReparationShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>{ReparationFields}</SimpleShowLayout>
  </Show>
)

export { ReparationList, ReparationShow }
