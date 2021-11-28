import React from 'react'
import { required, Create, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { enumContactType } from '../Enums'

const ContactInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="firstName" />
    <TextInput source="lastName" />
    <TextInput source="phone" />
    <TextInput source="email" validate={required()} />
    <TextInput source="role" />
    <SelectInput source="contactType" choices={enumContactType} validate={required()} />
  </SimpleForm>
)

const ContactCreate = (props) => (
  <Create {...props}>
    <ContactInputs {...props} />
  </Create>
)

const ContactEdit = (props) => (
  <Edit {...props}>
    <ContactInputs {...props} />
  </Edit>
)

export { ContactCreate, ContactEdit }
