import React from 'react'
import { EditGuesser } from '@api-platform/admin'
import ReparationInputs from './ReparationInputs'

const ReparationEdit = props => <EditGuesser {...props}>{ReparationInputs}</EditGuesser>

export default ReparationEdit
