import React from 'react'
import { Create, Edit } from 'react-admin'
import LivraisonBroyatsFields from './LivraisonBroyatsFields'

const LivraisonBroyatsCreate = props => (
  <Create {...props}>
    <LivraisonBroyatsFields {...props} />
  </Create>
)

const LivraisonBroyatsEdit = props => (
  <Edit {...props}>
    <LivraisonBroyatsFields {...props} />
  </Edit>
)

export { LivraisonBroyatsCreate, LivraisonBroyatsEdit }
