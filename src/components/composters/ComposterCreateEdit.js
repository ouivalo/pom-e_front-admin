import React from 'react'
import { Create, Edit } from 'react-admin'

import ComposterFields from './ComposterFields'

const ComposterCreate = props => (
  <Create {...props}>
    <ComposterFields {...props} />
  </Create>
)

const ComposterEdit = props => (
  <Edit {...props}>
    <ComposterFields {...props} />
  </Edit>
)

export { ComposterCreate, ComposterEdit }
