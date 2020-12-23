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
  SimpleList,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core'
import { Done, Clear } from '@material-ui/icons'

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

const ReparationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <List {...props} filters={<ReparationFilter />} sort={{ field: 'date', order: 'DESC' }} perPage={25}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.description}
          secondaryText={(record) => `${new Date(record.date).toLocaleDateString()} ${record.composter.name}`}
          tertiaryText={(record) => (record.done ? <Done /> : <Clear />)}
        />
      ) : (
        <Datagrid>
          {ReparationFields}
          <ShowButton />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

const ReparationShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>{ReparationFields}</SimpleShowLayout>
  </Show>
)

export { ReparationList, ReparationShow }
