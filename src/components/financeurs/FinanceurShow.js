import React from 'react'
import { Datagrid, DateField, Pagination, ReferenceManyField, Show, SimpleShowLayout, TextField } from 'react-admin'

const FinanceurShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" addLabel />
      <TextField source="initials" addLabel />
      <ReferenceManyField source="id" reference="composters" target="financeur" pagination={<Pagination />}>
        <Datagrid>
          <DateField source="DateMiseEnRoute" />
          <TextField source="name" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)

export default FinanceurShow
