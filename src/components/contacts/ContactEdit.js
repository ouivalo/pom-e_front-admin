import React from 'react'
import { EditGuesser } from '@api-platform/admin'
import ContactInputs from './ContactInputs'

const ContactEdit = props => <EditGuesser {...props}>{ContactInputs}</EditGuesser>

export default ContactEdit
