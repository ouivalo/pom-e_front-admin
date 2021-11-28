import React from 'react'
import { required, AutocompleteInput, Create, DateInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'
import { parse } from 'query-string'

const LivraisonBroyatsInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => {
  const { composter } = parse(rest.location.search)

  return (
    <SimpleForm {...rest} redirect={composter ? `/composters/${encodeURIComponent(composter)}/show/1` : 'show'} defaultValue={{ date: new Date(), composter }}>
      <DateInput source="date" validate={required()} />
      <NumberInput source="quantite" validate={required()} />
      <ReferenceInput
        source="composter"
        reference="composters"
        alwaysOn
        filterToQuery={(name) => ({ name })}
        validate={required()}
        format={(c) => (c instanceof Object ? c['@id'] : c)}
      >
        <AutocompleteInput optionValue="@id" />
      </ReferenceInput>
      <ReferenceInput source="livreur" reference="approvisionnement_broyats" format={(c) => (c instanceof Object ? c['@id'] : c)}>
        <SelectInput optionText="name" optionValue="@id" />
      </ReferenceInput>
    </SimpleForm>
  )
}

const LivraisonBroyatsCreate = (props) => (
  <Create {...props}>
    <LivraisonBroyatsInputs {...props} />
  </Create>
)

const LivraisonBroyatsEdit = (props) => {
  const transform = (data) => ({
    ...data,
    composter: data.composter instanceof Object ? data.composter['@id'] : data.composter,
    livreur: data.livreur instanceof Object ? data.livreur['@id'] : data.livreur,
  })
  return (
    <Edit {...props} transform={transform}>
      <LivraisonBroyatsInputs {...props} />
    </Edit>
  )
}

export { LivraisonBroyatsCreate, LivraisonBroyatsEdit }
