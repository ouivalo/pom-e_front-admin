import React from 'react'
import { CreateGuesser } from '@api-platform/admin'
import ContactInputs from './ContactInputs'

const ContactCreate = props => <CreateGuesser {...props}>{ContactInputs}</CreateGuesser>

export default ContactCreate
