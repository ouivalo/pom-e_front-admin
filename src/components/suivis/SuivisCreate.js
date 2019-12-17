import React from 'react'
import { CreateGuesser } from '@api-platform/admin'
import SuivisInputs from './SuivisInputs'

const SuivisCreate = props => <CreateGuesser {...props}>{SuivisInputs}</CreateGuesser>

export default SuivisCreate
