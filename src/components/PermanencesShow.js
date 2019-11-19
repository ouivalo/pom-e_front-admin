import React from 'react'
import { ShowGuesser, FieldGuesser } from '@api-platform/admin'
import { ReferenceField, ChipField, ReferenceArrayField, Datagrid, DateField, TextField, EditButton } from 'react-admin'

const PermanencesShow = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source="date" addLabel />
    <ReferenceField source="composter" reference="composters" allowEmpty>
      <ChipField source="name" />
    </ReferenceField>
    <ReferenceArrayField source="openers" reference="users" target="post_id">
      <Datagrid>
        <FieldGuesser source="username" sortable={false} />
        <FieldGuesser source="email" sortable={false} />
        <EditButton />
      </Datagrid>
    </ReferenceArrayField>
    <FieldGuesser source="eventTitle" addLabel />
    <FieldGuesser source="eventMessage" addLabel />
    <FieldGuesser source="nbUsers" addLabel />
    <FieldGuesser source="nbBuckets" addLabel />
    <FieldGuesser source="temperature" addLabel />
    <FieldGuesser source="canceled" addLabel />
  </ShowGuesser>
)

export default PermanencesShow
