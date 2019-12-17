import React from 'react'
import { ListGuesser } from '@api-platform/admin'
import { Filter, BooleanInput } from 'react-admin'
import ReparationFields from './ReparationFields'

const ReparationFilter = props => (
  <Filter {...props}>
    <BooleanInput source="done" defaultValue={false} />
  </Filter>
)

const ReparationList = props => (
  <ListGuesser {...props} filters={<ReparationFilter />}>
    {ReparationFields}
  </ListGuesser>
)

export default ReparationList
