import React from 'react'
import { FieldGuesser, ShowGuesser } from '@api-platform/admin'
import { Datagrid, List, Pagination, ReferenceManyField } from 'react-admin'

const ComposterPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />

const FinanceurShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source="name" addLabel />
      <FieldGuesser source="initials" addLabel />
      <ReferenceManyField label="Composteurs" reference="composters" target="financeurs" source="slug">
        <List {...props} pagination={<ComposterPagination />} bulkActionButtons={false} actions={false} sort={{ field: 'DateMiseEnRoute', order: 'DESC' }}>
          <Datagrid>
            <FieldGuesser source="DateMiseEnRoute" />
            <FieldGuesser source="name" />
          </Datagrid>
        </List>
      </ReferenceManyField>
    </ShowGuesser>
  )
}

export default FinanceurShow
