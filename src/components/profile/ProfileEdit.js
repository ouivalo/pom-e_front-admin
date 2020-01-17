import React from 'react'
import { Edit, TextInput, SimpleForm, required } from 'react-admin'
import jwtDecode from 'jwt-decode'

const ProfileEdit = ({ staticContext, ...props }) => {
  const token = localStorage.getItem('token')
  const userId = jwtDecode(token).userId

  return (
    <Edit
      id={`/users/${userId}`}
      resource="users"
      basePath="/mon-profile"
      title="Mon profile"
      redirect={false} // I don't need any redirection here, there's no list page
      {...props}
    >
      <SimpleForm>
        <TextInput source="username" disabled />
        <TextInput source="oldPassword" validate={required()} />
        <TextInput source="plainPassword" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}

export default ProfileEdit
