import React from 'react'
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import { ReferenceField, ReferenceArrayField, Filter, ReferenceInput, AutocompleteInput, ChipField, SingleFieldList } from 'react-admin'

const PermanencesFilter = props => (
  <Filter {...props}>
    <ReferenceInput source="composter" reference="composters" alwaysOn filterToQuery={searchText => ({ name: searchText })}>
      {/* TODO J'ai juste un probléme ici a cause l'identifiant composteur. Le filtre passe /composter/{slug} ce qui est normal mais ca ne marche pas sur une liaison, il faut l'id */}
      <AutocompleteInput optionValue="id" />
    </ReferenceInput>
  </Filter>
)

const PermanencesList = props => (
  <ListGuesser {...props} filters={<PermanencesFilter />} sort={{ field: 'date', order: 'DESC' }}>
    <FieldGuesser source="date" />
    <ReferenceArrayField source="openers" reference="users" allowEmpty={true} sortable={false}>
      <SingleFieldList>
        <ChipField source="username" />
      </SingleFieldList>
    </ReferenceArrayField>
    <FieldGuesser source="eventTitle" sortable={false} />
    <FieldGuesser source="eventMessage" sortable={false} />
    <FieldGuesser source="nbUsers" sortable={false} />
    <FieldGuesser source="nbBuckets" sortable={false} />
    <FieldGuesser source="temperature" sortable={false} />
    <ReferenceField source="composter" reference="composters" allowEmpty={true} sortable={false}>
      <ChipField source="name" />
    </ReferenceField>
    <FieldGuesser source="canceled" />
  </ListGuesser>
)

export default PermanencesList
