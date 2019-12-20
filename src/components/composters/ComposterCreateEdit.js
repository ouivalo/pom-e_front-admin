import React from 'react'
import { Create, Edit } from 'react-admin'

import ComposterInputs from './ComposterInputs'

const ComposterCreate = props => (
  <Create {...props}>
    <ComposterInputs {...props} />
  </Create>
)

const ComposterEdit = props => (
  <Edit {...props}>
    <ComposterInputs {...props} />
  </Edit>
)

export { ComposterCreate, ComposterEdit }
