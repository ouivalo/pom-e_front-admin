import React from 'react'
import { ShowGuesser, FieldGuesser } from '@api-platform/admin'
import ContactFields from './ContactFields'

import { ReferenceArrayField, Datagrid } from 'react-admin'

const ContactShow = props => (
  <ShowGuesser {...props}>
    {ContactFields}
    <ReferenceArrayField source="composters" reference="composters">
      <Datagrid>
        <FieldGuesser source="name" sortable={false} />
      </Datagrid>
    </ReferenceArrayField>
  </ShowGuesser>
)

export default ContactShow
