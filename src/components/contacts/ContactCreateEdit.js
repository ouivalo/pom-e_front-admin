import React from 'react'
import { Create, Edit } from 'react-admin'

import ContactFields from './ContactFields'

const ContactCreate = props => (
  <Create {...props}>
    <ContactFields {...props} />
  </Create>
)

const ContactEdit = props => (
  <Edit {...props}>
    <ContactFields {...props} />
  </Edit>
)

export { ContactCreate, ContactEdit }
