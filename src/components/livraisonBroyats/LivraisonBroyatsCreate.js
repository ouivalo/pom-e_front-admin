import React from 'react'
import { CreateGuesser } from '@api-platform/admin'
import LivraisonBroyatsInputs from './LivraisonBroyatsInputs'

const LivraisonBroyatsCreate = props => <CreateGuesser {...props}>{LivraisonBroyatsInputs}</CreateGuesser>

export default LivraisonBroyatsCreate
