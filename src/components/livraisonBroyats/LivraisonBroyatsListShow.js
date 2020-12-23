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
  SimpleList,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'

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

const LivraisonBroyatsList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <List {...props} filters={<LivraisonBroyatsFilter />} sort={{ field: 'date', order: 'DESC' }} perPage={25}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => `${record.quantite} L`}
          secondaryText={(record) => `${new Date(record.date).toLocaleDateString()} ${record.composter.name}`}
          tertiaryText={(record) => record.livreur.name}
        />
      ) : (
        <Datagrid>
          {LivraisonBroyatsFields}
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

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
