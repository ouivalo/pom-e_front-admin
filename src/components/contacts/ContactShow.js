import React from 'react'
import { ReferenceArrayField, Datagrid, SelectField, Show, SimpleShowLayout, TextField } from 'react-admin'

import { enumContactType } from '../Enums'

const ContactShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="firstName" addLabel />
      <TextField source="lastName" addLabel />
      <TextField source="phone" addLabel />
      <TextField source="email" addLabel />
      <SelectField source="contactType" choices={enumContactType} addLabel />
      <ReferenceArrayField source="composters" reference="composters">
        <Datagrid>
          <TextField source="name" sortable={false} />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
)

export default ContactShow
