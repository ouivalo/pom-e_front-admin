import React, { useState, Fragment } from 'react'
import {
  FormDataConsumer,
  REDUX_FORM_NAME,
  required,
  BooleanInput,
  DateInput,
  ImageField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin'
import { change } from 'redux-form'

import MediasSelectDialog from '../medias/MediasSelectDialog'
import { enumBroyat, enumStatus } from '../Enums'
import MapInput from '../MapInput'

const ComposterInputs = ({ hasList, hasEdit, hasShow, hasCreate, ...rest }) => {
  const [image, setImage] = useState(null)
  return (
    <SimpleForm {...rest} redirect="show">
      <TextInput source="name" validate={required()} />
      <ReferenceField source="image" reference="media_objects" allowEmpty>
        <ImageField source="contentUrl" style={{ display: image ? 'none' : 'block' }} />
      </ReferenceField>
      {image && (
        <span
          style={{
            backgroundImage: `url(${image.contentUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '10rem',
            display: 'block',
            margin: '0.5rem'
          }}
        />
      )}
      <FormDataConsumer>
        {({ dispatch }) => (
          <Fragment>
            <MediasSelectDialog
              onSelected={img => {
                setImage(img)
                dispatch(change(REDUX_FORM_NAME, 'image', img.id))
              }}
            />
          </Fragment>
        )}
      </FormDataConsumer>
      <SelectInput source="status" choices={enumStatus} />
      <TextInput source="serialNumber" />
      <TextInput source="plateNumber" />
      <DateInput source="DateMiseEnRoute" />
      <DateInput source="DateInauguration" />
      <DateInput source="DateInstallation" />
      <TextInput source="permanencesDescription" />
      <BooleanInput source="acceptNewMembers" />
      <TextInput source="description" />
      <TextInput source="publicDescription" />
      <ReferenceInput source="financeur" reference="financeurs">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="financeurSuivi" reference="financeurs">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="commune" reference="communes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="pole" reference="poles">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="quartier" reference="quartiers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="address" validate={required()} />
      <ReferenceInput source="mc" reference="users">
        <SelectInput optionText="username" />
      </ReferenceInput>
      <ReferenceInput source="equipement" reference="equipements">
        <SelectInput optionText={record => `${record.type} ${record.capacite}`} />
      </ReferenceInput>
      <TextInput source="openingProcedures" />
      <SelectInput source="broyatLevel" choices={enumBroyat} defaultValue={enumBroyat[0].id} />
      <NumberInput source="nbFoyersPotentiels" />
      <NumberInput source="nbInscrit" />
      <NumberInput source="nbDeposant" />
      <BooleanInput source="signaletiqueRond" />
      <BooleanInput source="signaletiquePanneau" />
      <BooleanInput source="hasCroc" />
      <BooleanInput source="hasCadenas" />
      <BooleanInput source="hasFourche" />
      <BooleanInput source="hasThermometre" />
      <TextInput source="lat" type="number" />
      <TextInput source="lng" type="number" />
      <MapInput />
    </SimpleForm>
  )
}
export default ComposterInputs
