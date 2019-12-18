import React from 'react'
import { CreateGuesser, InputGuesser } from '@api-platform/admin'
import { required } from 'react-admin'

const FinanceurCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" validate={required()} />
    <InputGuesser source="initials" validate={required()} />
  </CreateGuesser>
)

export default FinanceurCreate
