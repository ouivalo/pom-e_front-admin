const enumBroyat = [
  { id: 'Full', name: 'resources.composters.fields.enumBroyat.full' },
  { id: 'Reserve', name: 'resources.composters.fields.enumBroyat.reserve' },
  { id: 'Empty', name: 'resources.composters.fields.enumBroyat.empty' }
]

const enumStatus = [
  { id: 'Active', name: 'resources.composters.fields.enumStatus.active' },
  { id: 'Delete', name: 'resources.composters.fields.enumStatus.delete' },
  { id: 'Moved', name: 'resources.composters.fields.enumStatus.moved' },
  { id: 'ToBeMoved', name: 'resources.composters.fields.enumStatus.toBeMoved' },
  { id: 'Dormant', name: 'resources.composters.fields.enumStatus.dormant' },
  { id: 'InProject', name: 'resources.composters.fields.enumStatus.inProject' }
]

const enumAdminRoleOnly = [{ id: ['ROLE_ADMIN'], name: 'resources.users.fields.enumRoles.admin' }]

const enumRoles = [...enumAdminRoleOnly, { id: ['ROLE_USER'], name: 'resources.users.fields.enumRoles.user' }]

const enumDroits = [
  { id: 'Referent', name: 'resources.users.fields.enumDroits.referer' },
  { id: 'Opener', name: 'resources.users.fields.enumDroits.opener' }
]

const enumContactType = [
  { id: 'Syndic', name: 'resources.contacts.fields.enumContactType.syndic' },
  { id: 'Institution', name: 'resources.contacts.fields.enumContactType.institution' },
  { id: 'Établissement scolaire', name: 'resources.contacts.fields.enumContactType.school' }
]

export { enumBroyat, enumStatus, enumAdminRoleOnly, enumRoles, enumDroits, enumContactType }
