import React from 'react'
import { EditGuesser, InputGuesser } from '@api-platform/admin'
import { required } from 'react-admin'

const FinanceurEdit = props => (
  <EditGuesser {...props}>
    <InputGuesser source="name" validate={required()} />
    <InputGuesser source="initials" validate={required()} />
  </EditGuesser>
)

export default FinanceurEdit
