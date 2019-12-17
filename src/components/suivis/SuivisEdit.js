import React from 'react'
import { EditGuesser } from '@api-platform/admin'
import SuivisInputs from './SuivisInputs'

const SuivisEdit = props => <EditGuesser {...props}>{SuivisInputs}</EditGuesser>

export default SuivisEdit
