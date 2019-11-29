export default {
  resources: {
    composters: {
      name: 'Composteur |||| Composteures',
      fields: {
        mc: 'Maitre composteur',
        pavilionsVolume: 'Equipement',
        openingProcedures: 'Précédure d‘ouverture',
        financeur: 'Financeur propriétaire de l’équipement'
      }
    },
    users: {
      name: 'Utilisateur |||| Utilisateurs',
      fields: {
        email: 'Email',
        phone: 'N° de téléphone',
        username: 'Speudo',
        lastname: 'Nom',
        firstname: 'Prénom',
        role: 'Fonction'
      }
    },
    contacts: {
      name: 'Contact |||| Contacts',
      fields: {
        email: 'Email',
        phone: 'N° de téléphone',
        username: 'Speudo',
        lastName: 'Nom',
        firstName: 'Prénom',
        role: 'Fonction'
      }
    },
    permanences: {
      name: 'Permanence |||| Permanences',
      fields: {
        canceled: 'Annulé',
        openers: 'Ouvreurs',
        eventTitle: 'Titre de l‘événement',
        eventMessage: 'Description de l‘événement',
        nbUsers: 'Nombre d‘utilisateurs',
        nbBuckets: 'Nombre de bio seaux',
        temperature: 'Température'
      }
    },
    user_composters: {
      name: 'Utilisateur du composteur |||| Utilisateurs du composteur',
      fields: {
        capability: 'Droit'
      }
    },
    equipements: {
      name: 'Equipement |||| Equipements',
      fields: {
        type: 'Type',
        capacite: 'Capacité'
      }
    }
  }
}
