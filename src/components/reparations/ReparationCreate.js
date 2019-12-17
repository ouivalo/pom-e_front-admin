import React from 'react'
import { CreateGuesser } from '@api-platform/admin'
import ReparationInputs from './ReparationInputs'

const ReparationCreate = props => <CreateGuesser {...props}>{ReparationInputs}</CreateGuesser>

export default ReparationCreate
