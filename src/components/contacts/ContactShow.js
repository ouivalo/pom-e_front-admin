import React from 'react'
import { ReferenceArrayField, Datagrid, Show, SimpleShowLayout, TextField } from 'react-admin'

const ContactShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="firstName" addLabel />
      <TextField source="lastName" addLabel />
      <TextField source="phone" addLabel />
      <TextField source="email" addLabel />
      <ReferenceArrayField source="composters" reference="composters">
        <Datagrid>
          <TextField source="name" sortable={false} />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
)

export default ContactShow
