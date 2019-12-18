import React from 'react'
import { FieldGuesser, ShowGuesser } from '@api-platform/admin'
import { Datagrid, Pagination, ReferenceManyField } from 'react-admin'

const FinanceurShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source="name" addLabel />
      <FieldGuesser source="initials" addLabel />
      <ReferenceManyField source="id" reference="composters" target="financeur" pagination={<Pagination />}>
        <Datagrid>
          <FieldGuesser source="DateMiseEnRoute" />
          <FieldGuesser source="name" />
        </Datagrid>
      </ReferenceManyField>
    </ShowGuesser>
  )
}

export default FinanceurShow
