import React from 'react'
import {
  Datagrid,
  DateField,
  EditButton,
  Filter,
  List,
  ReferenceField,
  Show,
  ShowButton,
  CreateButton,
  SimpleShowLayout,
  TextField,
  TextInput,
  TopToolbar,
} from 'react-admin'

const LivraisonBroyatsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Composteurs" source="composter.name" alwaysOn />
  </Filter>
)

const LivraisonBroyatsFields = [
  <DateField source="date" addLabel />,
  <TextField source="quantite" addLabel sortable={false} />,
  <ReferenceField source="composter[@id]" reference="composters" link="show" allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
  <ReferenceField source="livreur[@id]" reference="approvisionnement_broyats" link={false} allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
]

const LivraisonBroyatsList = (props) => (
  <List {...props} filters={<LivraisonBroyatsFilter />} sort={{ field: 'date', order: 'DESC' }} perPage={25}>
    <Datagrid>
      {LivraisonBroyatsFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const LivraisonBroyatsShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
    <CreateButton basePath={basePath} record={data} />
  </TopToolbar>
)
const LivraisonBroyatsShow = (props) => (
  <Show actions={<LivraisonBroyatsShowActions />} {...props}>
    <SimpleShowLayout>{LivraisonBroyatsFields}</SimpleShowLayout>
  </Show>
)

export { LivraisonBroyatsList, LivraisonBroyatsShow }
