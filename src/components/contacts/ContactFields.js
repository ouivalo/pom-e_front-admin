import React from 'react'
import { FieldGuesser } from '@api-platform/admin'

export default [
  <FieldGuesser source="firstName" addLabel />,
  <FieldGuesser source="lastName" addLabel />,
  <FieldGuesser source="phone" addLabel />,
  <FieldGuesser source="email" addLabel />
]
