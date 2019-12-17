import React from 'react'
import { ShowGuesser } from '@api-platform/admin'
import ReparationFields from './ReparationFields'

const ReparationShow = props => {
  return <ShowGuesser {...props}>{ReparationFields}</ShowGuesser>
}

export default ReparationShow
