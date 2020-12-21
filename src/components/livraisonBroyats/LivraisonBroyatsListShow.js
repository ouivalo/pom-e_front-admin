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
    SimpleShowLayout,
    TextField, TextInput
} from 'react-admin'

const LivraisonBroyatsFilter = props => (
    <Filter {...props}>
        <TextInput label="Composteurs" source="composter.name" alwaysOn />
    </Filter>
)

const LivraisonBroyatsFields = [
  <DateField source="date" addLabel />,
  <TextField source="quantite" addLabel sortable={false} />,
  <ReferenceField source="composter" reference="composters" link="show" allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>,
  <ReferenceField source="livreur" reference="approvisionnement_broyats" link={false} allowEmpty sortable={false}>
    <TextField source="name" />
  </ReferenceField>
]

const LivraisonBroyatsList = props => (
  <List {...props} filters={<LivraisonBroyatsFilter />} perPage={25}>
    <Datagrid>
      {LivraisonBroyatsFields}
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
)

const LivraisonBroyatsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>{LivraisonBroyatsFields}</SimpleShowLayout>
  </Show>
)

export { LivraisonBroyatsList, LivraisonBroyatsShow }
