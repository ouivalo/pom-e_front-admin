import React from 'react'
import { FieldGuesser, ShowGuesser } from '@api-platform/admin'
import { SelectField } from 'react-admin'

import { enumRoles } from '../Enums'

const UserShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source="username" addLabel />
      <FieldGuesser source="email" addLabel />
      <SelectField source="roles" choices={enumRoles} addLabel />
      <FieldGuesser source="firstname" addLabel />
      <FieldGuesser source="lastname" addLabel />
      <FieldGuesser source="phone" addLabel />
      <FieldGuesser source="enabled" label={'resources.users.fields.isEnabled'} addLabel />
    </ShowGuesser>
  )
}

export default UserShow
