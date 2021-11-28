import React from 'react'
import { Create, Edit, SimpleForm, TextInput, required } from 'react-admin'

const FinanceurFields = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="name" validate={required()} />
    <TextInput source="initials" validate={required()} />
  </SimpleForm>
)

const FinanceurCreate = props => (
  <Create {...props}>
    <FinanceurFields {...props} />
  </Create>
)

const FinanceurEdit = props => (
  <Edit {...props}>
    <FinanceurFields {...props} />
  </Edit>
)

export { FinanceurCreate, FinanceurEdit }
