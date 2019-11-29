import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin'

const ContactsList = props => (
  <ListGuesser {...props}>
    <FieldGuesser source="lastName" />
    <FieldGuesser source="firstName" />
    <FieldGuesser source="phone" />
    <FieldGuesser source="email" />
    <FieldGuesser source="role" />
    <FieldGuesser source="contactType" />
    <ReferenceArrayField source="composters" reference="composters" label="Composters">
      <SingleFieldList>
        <ChipField source="name" />
      </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
)

export default ContactsList
